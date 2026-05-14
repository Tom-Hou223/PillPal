import { useState, useEffect } from 'react';
import { View, Text, Input, Button, Image } from '@tarojs/components';
import Taro, { useRouter, useLoad } from '@tarojs/taro';
import { medicineApi } from '../../services/api';
import { getTraceCodeImage } from '../../utils/traceImage';
import './trace-confirm.scss';

export default function TraceConfirm() {
  const router = useRouter();
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [traceCode, setTraceCode] = useState('');
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  // 辅助函数：从 API 响应中提取真实数据（处理嵌套结构）
  const getActualData = (res: any) => {
    if (res.code === 0 && res.data) {
      if (res.data.success && res.data.data) {
        return res.data.data;
      }
      return res.data;
    }
    return null;
  };

  useLoad(() => {
    Taro.getSystemInfo()
      .then((res) => setStatusBarHeight(res.statusBarHeight || 0))
      .catch(() => {});

    // 从全局数据获取图片路径
    const savedImage = getTraceCodeImage();
    let images: string[] = [];
    if (savedImage) {
      images = [savedImage];
    }

    setImagePaths(images);
    setTraceCode((router.params as any)?.traceCode || '');
  });

  // 绑定溯源码输入
  const bindTraceCodeInput = (e: any) => {
    setTraceCode(e.detail.value);
  };

  // 重新扫码
  const onRescan = () => {
    Taro.showActionSheet({
      itemList: ['拍照溯源', '打开相册'],
      success: (res) => {
        if (res.tapIndex === 0) {
          // 拍照溯源
          takeTracePhoto('camera');
        } else if (res.tapIndex === 1) {
          // 打开相册
          takeTracePhoto('album');
        }
      },
    });
  };

  // 选择溯源图片
  const takeTracePhoto = (sourceType: 'camera' | 'album') => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: [sourceType],
      success: (res) => {
        const imagePath = res.tempFilePaths[0];
        recognizeTraceCode(imagePath);
      },
      fail: () => {
        Taro.showToast({ title: '选择图片失败', icon: 'none' });
      },
    });
  };

  // 识别药品溯源码
  const recognizeTraceCode = (imagePath: string) => {
    Taro.showLoading({ title: '识别中...' });

    // 调用后端 API 识别溯源码
    medicineApi.recognizeImage(imagePath)
      .then((res: any) => {
        Taro.hideLoading();

        const actualData = getActualData(res);
        if (actualData && actualData.traceCode) {
          // 识别成功，更新数据
          setTraceCode(actualData.traceCode);
          setImagePaths([imagePath]);
        } else {
          // 识别失败，提示并提供重新拍摄选项
          Taro.showModal({
            title: '提示',
            content: '未识别到有效溯源码，请重新拍摄',
            confirmText: '重新拍摄',
            cancelText: '取消',
            success: (modalRes) => {
              if (modalRes.confirm) {
                onRescan();
              }
            },
          });
        }
      })
      .catch(() => {
        Taro.hideLoading();
        // 识别失败，提示并提供重新拍摄选项
        Taro.showModal({
          title: '提示',
          content: '识别失败，请重新拍摄',
          confirmText: '重新拍摄',
          cancelText: '取消',
          success: (modalRes) => {
            if (modalRes.confirm) {
              onRescan();
            }
          },
        });
      });
  };

  // 添加照片
  const onAddImage = () => {
    if (imagePaths.length >= 9) {
      Taro.showToast({ title: '最多添加9张照片', icon: 'none' });
      return;
    }

    Taro.chooseImage({
      count: 9 - imagePaths.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera', 'album'],
      success: (res) => {
        setImagePaths([...imagePaths, ...res.tempFilePaths]);
      },
      fail: () => {
        Taro.showToast({ title: '选择图片失败', icon: 'none' });
      },
    });
  };

  // 删除照片
  const onDeleteImage = (index: number) => {
    const newPaths = imagePaths.filter((_, i) => i !== index);
    setImagePaths(newPaths);
  };

  // 确认并查询
  const onConfirm = () => {
    if (!traceCode) {
      Taro.showToast({ title: '溯源码不能为空', icon: 'none' });
      return;
    }

    // 复制溯源码
    Taro.setClipboardData({
      data: traceCode,
      success: () => {
        Taro.showToast({ title: '复制成功', icon: 'success' });

        // 跳转到码上放心平台
        setTimeout(() => {
          Taro.navigateTo({
            url: '/pages/webview/webview?url=https://www.mashangfangxin.com/',
          });
        }, 1000);
      },
      fail: () => {
        Taro.showToast({ title: '复制失败', icon: 'none' });
      },
    });
  };

  const renderNavBar = () => (
    <View className="nav-bar" style={{ paddingTop: `${statusBarHeight}px` }}>
      <View className="nav-bar-content">
        <View className="nav-back" onClick={() => Taro.navigateBack()}>
          <Text className="nav-back-text">←</Text>
        </View>
        <Text className="nav-title">溯源码确认</Text>
        <View className="nav-place" />
      </View>
    </View>
  );

  return (
    <View
      className="container"
      style={{
        '--status-bar-height': `${statusBarHeight}px`,
        paddingTop: `calc(${statusBarHeight}px + 160rpx + 32rpx)`,
      }}
    >
      {renderNavBar()}

      <View className="content">
        <View className="hint-text">
          请核对扫描结果，确认无误后查询
        </View>

        {/* 溯源码输入框和照片对照区域 */}
        <View className="form-item">
          <View className="label">溯源码</View>
          <View className="trace-code-section">
            <View className="input-wrapper">
              <Input
                className="input"
                value={traceCode}
                onInput={bindTraceCodeInput}
                placeholder="请输入溯源码"
              />
              <Button className="rescan-btn" onClick={onRescan}>
                <Text className="rescan-text">重新扫码</Text>
              </Button>
            </View>

            {/* 溯源码照片 - 放在输入框旁边方便对照 */}
            {imagePaths.length > 0 && (
              <View className="photo-preview-section">
                <View className="label">溯源码照片</View>
                <View className="photo-preview-container">
                  {imagePaths.map((path, index) => (
                    <View key={index} className="photo-preview-item">
                      <Image className="photo-preview" src={path} mode="aspectFit" />
                      <View
                        className="delete-btn-small"
                        onClick={() => onDeleteImage(index)}
                      >
                        ×
                      </View>
                    </View>
                  ))}
                  {imagePaths.length < 9 && (
                    <View className="add-photo-small" onClick={onAddImage}>
                      <Text className="add-icon-small">+</Text>
                    </View>
                  )}
                </View>
              </View>
            )}
          </View>
        </View>

        {/* 如果没有照片，显示添加照片区域 */}
        {imagePaths.length === 0 && (
          <View className="form-item">
            <View className="label">溯源码照片</View>
            <View className="add-photo-area" onClick={onAddImage}>
              <Text className="add-icon-large">+</Text>
              <Text className="add-text-large">点击添加溯源码照片</Text>
            </View>
          </View>
        )}

        {/* 确认并查询按钮 */}
        <Button className="confirm-btn" onClick={onConfirm}>
          <Text className="confirm-text">确认并查询</Text>
        </Button>

        {/* 提示信息 */}
        <View className="tip-box">
          <Text className="tip-text">
            提示：确认后将自动复制溯源码并打开码上放心网站，您只需在网站中粘贴即可查询
          </Text>
        </View>
      </View>
    </View>
  );
}
