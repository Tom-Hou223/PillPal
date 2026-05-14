import { useState, useCallback } from 'react';
import { View, Text, Button, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { medicineApi } from '../../services/api';
import './medicine-scan.scss';

interface MedicineInfo {
  name: string;
  manufacturer?: string;
  specification?: string;
  category?: string;
  dosage?: string;
  expiryDate?: string;
  barcode?: string;
  traceCode?: string;
}

export default function MedicineScan() {
  const [loading, setLoading] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [medicineInfo, setMedicineInfo] = useState<MedicineInfo | null>(null);
  const [photoBuffer, setPhotoBuffer] = useState<string[]>([]);
  const [showPhotoBufferModal, setShowPhotoBufferModal] = useState(false);
  const [lastPhotoTime, setLastPhotoTime] = useState(0);
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [showModeSelector, setShowModeSelector] = useState(false);

  // Barcode scan
  const onScanCode = useCallback(() => {
    Taro.scanCode({
      scanType: ['barCode', 'qrCode'],
      success: (res) => {
        console.log('扫码结果:', res);
        setScanResult(res.result);
        processScanResult(res.result);
      },
      fail: (err) => {
        console.error('扫码失败:', err);
        Taro.showToast({ title: '扫码失败，请重试', icon: 'none' });
      },
    });
  }, []);

  const processScanResult = async (barcode: string) => {
    setLoading(true);
    try {
      const res = await medicineApi.recognizeBarcode(barcode);
      setLoading(false);
      if (res.code === 0 && res.data) {
        const info = res.data as MedicineInfo;
        setMedicineInfo(info);
        Taro.showToast({ title: '扫码成功，已识别药品', icon: 'success' });
        setTimeout(() => {
          navigateToAddMedicine(info, barcode);
        }, 500);
      } else {
        showRecognitionFailed(barcode);
      }
    } catch {
      setLoading(false);
      showRecognitionFailed(barcode);
    }
  };

  const showRecognitionFailed = (barcode: string) => {
    Taro.showModal({
      title: '提示',
      content: '识别库中暂无该药品，请手动输入',
      confirmText: '手动输入',
      cancelText: '重新扫描',
      success: (modalRes) => {
        if (modalRes.confirm) {
          navigateToAddMedicine({ name: '', barcode }, barcode);
        } else {
          onScanCode();
        }
      },
    });
  };

  const navigateToAddMedicine = (info: MedicineInfo, barcode: string = '') => {
    const params = `scan=true&name=${encodeURIComponent(info.name || '')}&manufacturer=${encodeURIComponent(info.manufacturer || '')}&specification=${encodeURIComponent(info.specification || '')}&category=${encodeURIComponent(info.category || '其他')}&dosage=${encodeURIComponent(info.dosage || '')}&barcode=${encodeURIComponent(barcode)}`;
    Taro.navigateTo({
      url: `/pages/medicine-detail/medicine-detail?${params}`,
    });
  };

  // Image recognition (from album)
  const onChooseImage = async () => {
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
      });
      if (res.tempFilePaths && res.tempFilePaths.length > 0) {
        recognizeImage(res.tempFilePaths[0]);
      }
    } catch {
      Taro.showToast({ title: '选择图片失败', icon: 'none' });
    }
  };

  // Take photo
  const onTakePhoto = async () => {
    const now = Date.now();
    const fiveMinutes = 5 * 60 * 1000;

    // Check if buffer has photos within 5 minutes
    if (photoBuffer.length > 0) {
      if (lastPhotoTime > 0 && now - lastPhotoTime > fiveMinutes) {
        setPhotoBuffer([]);
        setLastPhotoTime(0);
        Taro.showToast({ title: '已超时，重新拍照', icon: 'none' });
      } else {
        setShowPhotoBufferModal(true);
        return;
      }
    }

    const remainingCount = 9 - photoBuffer.length;
    if (remainingCount <= 0) {
      Taro.showToast({ title: '最多9张照片', icon: 'none' });
      return;
    }

    try {
      const res = await Taro.chooseImage({
        count: remainingCount,
        sizeType: ['original', 'compressed'],
        sourceType: ['camera'],
      });
      if (res.tempFilePaths && res.tempFilePaths.length > 0) {
        const newBuffer = [...photoBuffer, ...res.tempFilePaths];
        setPhotoBuffer(newBuffer);
        setShowPhotoBufferModal(true);
        setLastPhotoTime(Date.now());
      }
    } catch {
      Taro.showToast({ title: '拍照失败', icon: 'none' });
    }
  };

  // Recognize single image
  const recognizeImage = async (filePath: string) => {
    Taro.showLoading({ title: '识别中...' });
    try {
      const res: any = await medicineApi.recognizeImage(filePath);
      Taro.hideLoading();
      if (res.code === 0 && res.data) {
        Taro.showToast({ title: '识别成功', icon: 'success', duration: 1500 });
        setTimeout(() => {
          navigateToAddMedicine(res.data as MedicineInfo, res.data.barcode || '');
        }, 500);
      } else {
        Taro.showToast({ title: '未识别到药品信息', icon: 'none' });
      }
    } catch {
      Taro.hideLoading();
      Taro.showToast({ title: '识别失败', icon: 'none' });
    }
  };

  // Photo buffer actions
  const onContinueAddPhoto = async () => {
    const remainingCount = 9 - photoBuffer.length;
    if (remainingCount <= 0) {
      Taro.showToast({ title: '最多9张照片', icon: 'none' });
      return;
    }
    try {
      const res = await Taro.chooseImage({
        count: remainingCount,
        sizeType: ['original', 'compressed'],
        sourceType: ['camera'],
      });
      if (res.tempFilePaths && res.tempFilePaths.length > 0) {
        const newBuffer = [...photoBuffer, ...res.tempFilePaths];
        setPhotoBuffer(newBuffer);
        setShowPhotoBufferModal(true);
        setLastPhotoTime(Date.now());
      }
    } catch {
      Taro.showToast({ title: '拍照失败', icon: 'none' });
    }
  };

  const onRemovePhotoFromBuffer = (index: number) => {
    const newBuffer = photoBuffer.filter((_, i) => i !== index);
    setPhotoBuffer(newBuffer);
    if (newBuffer.length === 0) {
      setShowPhotoBufferModal(false);
    }
  };

  const onClearPhotoBuffer = () => {
    Taro.showModal({
      title: '确认清空',
      content: '确定要清空所有已拍照片吗？',
      confirmText: '清空',
      confirmColor: '#e74c3c',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          setPhotoBuffer([]);
          setShowPhotoBufferModal(false);
          setLastPhotoTime(0);
          Taro.showToast({ title: '已清空', icon: 'success' });
        }
      },
    });
  };

  const onRecognizeBufferPhotos = async () => {
    if (photoBuffer.length === 0) {
      Taro.showToast({ title: '没有照片', icon: 'none' });
      return;
    }
    setShowPhotoBufferModal(false);
    setIsRecognizing(true);

    // Recognize first photo
    await recognizeMultiImage(photoBuffer);
    setIsRecognizing(false);
  };

  const recognizeMultiImage = async (imagePaths: string[]) => {
    if (imagePaths.length === 0) return;
    if (imagePaths.length === 1) {
      await recognizeImage(imagePaths[0]);
      return;
    }

    Taro.showLoading({ title: '识别中...' });
    let mergedResult: MedicineInfo = {
      name: '',
      manufacturer: '',
      specification: '',
      category: '其他',
      dosage: '',
      expiryDate: '',
    };

    for (let i = 0; i < imagePaths.length; i++) {
      Taro.showLoading({ title: `识别中... ${i + 1}/${imagePaths.length}` });
      try {
        const res: any = await medicineApi.recognizeImage(imagePaths[i]);
        if (res.code === 0 && res.data) {
          const data = res.data as MedicineInfo;
          if (!mergedResult.name && data.name) mergedResult.name = data.name;
          if (!mergedResult.manufacturer && data.manufacturer)
            mergedResult.manufacturer = data.manufacturer;
          if (!mergedResult.specification && data.specification)
            mergedResult.specification = data.specification;
          if (mergedResult.category === '其他' && data.category !== '其他')
            mergedResult.category = data.category;
          if (!mergedResult.dosage && data.dosage) mergedResult.dosage = data.dosage;
          if (!mergedResult.expiryDate && data.expiryDate)
            mergedResult.expiryDate = data.expiryDate;
        }
      } catch {
        // Continue with next image
      }
    }

    Taro.hideLoading();
    setIsRecognizing(false);

    if (mergedResult.name) {
      Taro.showToast({ title: '识别成功', icon: 'success', duration: 1500 });
      setTimeout(() => {
        navigateToAddMedicine(mergedResult, '');
      }, 500);
    } else {
      Taro.showModal({
        title: '识别失败',
        content: '未能识别药品信息，请手动输入',
        confirmText: '手动输入',
        cancelText: '重新识别',
        success: (res) => {
          if (res.confirm) {
            Taro.navigateTo({ url: '/pages/medicine-detail/medicine-detail' });
          }
        },
      });
    }
  };

  // Manual add
  const onManualAdd = () => {
    Taro.navigateTo({ url: '/pages/medicine-detail/medicine-detail' });
  };

  // Trace source
  const onTraceSource = async () => {
    Taro.showActionSheet({
      itemList: ['拍照溯源', '打开相册'],
      success: async (res) => {
        try {
          const imageRes = await Taro.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: [res.tapIndex === 0 ? 'camera' : 'album'],
          });
          if (imageRes.tempFilePaths && imageRes.tempFilePaths.length > 0) {
            Taro.showLoading({ title: '识别中...' });
            try {
              const recRes: any = await medicineApi.recognizeImage(imageRes.tempFilePaths[0]);
              Taro.hideLoading();
              if (recRes.code === 0 && recRes.data && recRes.data.traceCode) {
                Taro.navigateTo({
                  url: `/pages/webview/webview?url=${encodeURIComponent(recRes.data.traceCode)}`,
                });
              } else {
                Taro.showModal({
                  title: '提示',
                  content: '未识别到有效溯源码，请重新拍摄',
                  confirmText: '重新拍摄',
                  cancelText: '取消',
                  success: (modalRes) => {
                    if (modalRes.confirm) onTraceSource();
                  },
                });
              }
            } catch {
              Taro.hideLoading();
              Taro.showModal({
                title: '提示',
                content: '识别失败，请重新拍摄',
                confirmText: '重新拍摄',
                cancelText: '取消',
                success: (modalRes) => {
                  if (modalRes.confirm) onTraceSource();
                },
              });
            }
          }
        } catch {
          Taro.showToast({ title: '选择图片失败', icon: 'none' });
        }
      },
    });
  };

  return (
    <View className="scan-container">
      {/* Header */}
      <View className="scan-header">
        <View className="header-back" onClick={() => Taro.navigateBack()}>
          <Text className="back-arrow">&lt;</Text>
        </View>
        <Text className="header-title">药品识别</Text>
        <View className="header-placeholder" />
      </View>

      {/* Main area */}
      <View className="scan-main">
        <View className="scan-icon-area">
          <View className="scan-icon-circle">
            <Text className="scan-icon-text">💊</Text>
          </View>
          <Text className="scan-desc">通过扫码或拍照识别药品信息</Text>
        </View>

        {loading && (
          <View className="scan-loading">
            <Text className="loading-text">识别中，请稍候...</Text>
          </View>
        )}

        {isRecognizing && (
          <View className="scan-loading">
            <Text className="loading-text">批量识别中，请稍候...</Text>
          </View>
        )}

        {/* Action buttons */}
        <View className="scan-actions">
          <View className="scan-action-row">
            <Button className="scan-btn scan-btn--primary" onClick={onScanCode}>
              <Text className="scan-btn-icon">📷</Text>
              <Text className="scan-btn-text">扫码识别</Text>
              <Text className="scan-btn-desc">扫描条形码/二维码</Text>
            </Button>
          </View>

          <View className="scan-action-row scan-action-row--double">
            <Button className="scan-btn scan-btn--secondary" onClick={onTakePhoto}>
              <Text className="scan-btn-icon">📸</Text>
              <Text className="scan-btn-text">拍照识别</Text>
              <Text className="scan-btn-desc">拍摄药品包装</Text>
            </Button>
            <Button className="scan-btn scan-btn--secondary" onClick={onChooseImage}>
              <Text className="scan-btn-icon">🖼️</Text>
              <Text className="scan-btn-text">相册选择</Text>
              <Text className="scan-btn-desc">从相册选择图片</Text>
            </Button>
          </View>

          <View className="scan-action-row scan-action-row--double">
            <Button className="scan-btn scan-btn--outline" onClick={onTraceSource}>
              <Text className="scan-btn-icon">🔍</Text>
              <Text className="scan-btn-text">药品溯源</Text>
              <Text className="scan-btn-desc">识别药品溯源码</Text>
            </Button>
            <Button className="scan-btn scan-btn--outline" onClick={onManualAdd}>
              <Text className="scan-btn-icon">✏️</Text>
              <Text className="scan-btn-text">手动输入</Text>
              <Text className="scan-btn-desc">手动添加药品信息</Text>
            </Button>
          </View>
        </View>

        {/* Buffer indicator */}
        {photoBuffer.length > 0 && !showPhotoBufferModal && (
          <View className="buffer-indicator" onClick={() => setShowPhotoBufferModal(true)}>
            <Text className="buffer-indicator-text">
              已拍摄 {photoBuffer.length}/9 张照片，点击查看
            </Text>
          </View>
        )}

        {/* Scan result */}
        {scanResult && (
          <View className="scan-result">
            <Text className="result-title">扫描结果</Text>
            <Text className="result-code">条码：{scanResult}</Text>
            {medicineInfo && (
              <View className="result-info">
                <Text className="result-name">药品：{medicineInfo.name}</Text>
                {medicineInfo.manufacturer && (
                  <Text className="result-detail">厂家：{medicineInfo.manufacturer}</Text>
                )}
                {medicineInfo.specification && (
                  <Text className="result-detail">规格：{medicineInfo.specification}</Text>
                )}
              </View>
            )}
          </View>
        )}
      </View>

      {/* Photo buffer modal */}
      {showPhotoBufferModal && (
        <View className="modal-overlay" onClick={() => setShowPhotoBufferModal(false)}>
          <View className="photo-buffer-modal" onClick={(e) => e.stopPropagation()}>
            <View className="modal-header">
              <Text className="modal-title">照片缓冲区 ({photoBuffer.length}/9)</Text>
              <Text className="modal-close" onClick={() => setShowPhotoBufferModal(false)}>
                ✕
              </Text>
            </View>
            <Text className="modal-subtitle">已拍摄照片，可继续添加</Text>

            <View className="photo-grid">
              {photoBuffer.map((photo, index) => (
                <View className="photo-item" key={index}>
                  <Image className="photo-image" src={photo} mode="aspectFill" />
                  <View className="photo-remove" onClick={() => onRemovePhotoFromBuffer(index)}>
                    <Text className="photo-remove-icon">✕</Text>
                  </View>
                </View>
              ))}
            </View>

            <View className="modal-actions">
              <Button
                className="modal-btn modal-btn--default"
                onClick={onContinueAddPhoto}
                disabled={photoBuffer.length >= 9}
              >
                继续添加
              </Button>
              <Button className="modal-btn modal-btn--danger" onClick={onClearPhotoBuffer}>
                清空
              </Button>
              <Button className="modal-btn modal-btn--primary" onClick={onRecognizeBufferPhotos}>
                开始识别
              </Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
