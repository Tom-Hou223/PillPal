import { useState, useEffect, useCallback } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useDidShow, usePullDownRefresh } from '@tarojs/taro';
import NavBar from '../../components/nav-bar';
import { useUserStore } from '../../stores/user.store';
import { UserManager } from '../../services/api';
import './hospital.scss';

interface Hospital {
  id: number;
  name: string;
  address: string;
  distance: string;
  phone: string;
  type: string;
  latitude: number;
  longitude: number;
}

interface RecycleGuideline {
  title: string;
  content: string;
}

const RECYCLE_GUIDELINES: RecycleGuideline[] = [
  {
    title: '过期药品危害',
    content: '过期药品不仅失去药效，还可能产生有害物质，对人体健康和环境造成严重危害。',
  },
  {
    title: '正确回收方法',
    content: '将过期药品送至指定回收点，不要随意丢弃或冲入下水道。',
  },
  {
    title: '回收注意事项',
    content: '保持药品包装完整，分类存放，避免儿童接触。',
  },
  {
    title: '回收时间',
    content: '一般医院和药店都会设有固定的回收点，可在工作日前往。',
  },
];

export default function Hospital() {
  const { isSeniorMode } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [nearByHospitals, setNearByHospitals] = useState<Hospital[]>([]);
  const [currentLocation, setCurrentLocation] = useState<any>(null);
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  const getSystemInfo = useCallback(() => {
    Taro.getSystemInfo({
      success: (res) => {
        setStatusBarHeight(res.statusBarHeight);
      },
    });
  }, []);

  const searchNearByHospitals = useCallback((latitude: number, longitude: number) => {
    // 模拟附近回收点数据
    const mockHospitals: Hospital[] = [
      {
        id: 1,
        name: '社区卫生服务中心',
        address: '北京市海淀区中关村南大街5号',
        distance: '500m',
        phone: '010-12345678',
        type: '医院',
        latitude,
        longitude: longitude + 0.001,
      },
      {
        id: 2,
        name: '同仁堂药店',
        address: '北京市海淀区中关村大街1号',
        distance: '800m',
        phone: '010-87654321',
        type: '药店',
        latitude: latitude + 0.001,
        longitude,
      },
      {
        id: 3,
        name: '协和医院',
        address: '北京市东城区帅府园1号',
        distance: '2.5km',
        phone: '010-69156114',
        type: '医院',
        latitude: latitude + 0.01,
        longitude: longitude + 0.01,
      },
    ];

    setTimeout(() => {
      setNearByHospitals(mockHospitals);
      setLoading(false);
    }, 1000);
  }, []);

  const getLocation = useCallback(() => {
    setLoading(true);
    Taro.getLocation({
      type: 'wgs84',
      success: (res) => {
        setCurrentLocation(res);
        searchNearByHospitals(res.latitude, res.longitude);
      },
      fail: () => {
        Taro.showToast({ title: '获取位置失败', icon: 'none' });
        setLoading(false);
        // 使用默认位置
        searchNearByHospitals(39.9, 116.4);
      },
    });
  }, [searchNearByHospitals]);

  useEffect(() => {
    getSystemInfo();
    getLocation();
  }, [getSystemInfo, getLocation]);

  useDidShow(() => {
    getSystemInfo();
  });

  usePullDownRefresh(() => {
    getLocation();
    Taro.stopPullDownRefresh();
  });

  const onHospitalClick = (hospital: Hospital) => {
    Taro.openLocation({
      latitude: hospital.latitude,
      longitude: hospital.longitude,
      name: hospital.name,
      address: hospital.address,
      scale: 18,
    });
  };

  const onCallPhone = (phone: string) => {
    Taro.makePhoneCall({ phoneNumber: phone });
  };

  const onRefresh = () => {
    getLocation();
  };

  const getTypeTag = (type: string) => {
    return type === '医院' ? 'tag-hospital' : 'tag-pharmacy';
  };

  return (
    <View className="hospital-container">
      <NavBar title="附近回收点" showBack />

      <View className="content" style={{ paddingTop: `calc(${statusBarHeight}px + 88rpx + 24rpx)` }}>
        {/* 附近回收点列表 */}
        <View className="section">
          <View className="section-header">
            <Text className="section-title">附近回收点</Text>
            <View className="refresh-btn" onClick={onRefresh}>
              <Text className="refresh-icon">&#8635;</Text>
              <Text className="refresh-text">刷新</Text>
            </View>
          </View>

          {loading ? (
            <View className="loading-state">
              <View className="spinner" />
              <Text className="loading-text">加载中...</Text>
            </View>
          ) : nearByHospitals.length > 0 ? (
            <View className="hospital-list">
              {nearByHospitals.map((hospital) => (
                <View
                  key={hospital.id}
                  className="hospital-item"
                  onClick={() => onHospitalClick(hospital)}
                >
                  <View className="hospital-header">
                    <View className="hospital-name-row">
                      <Text className="hospital-name">{hospital.name}</Text>
                      <Text className={`hospital-type-tag ${getTypeTag(hospital.type)}`}>
                        {hospital.type}
                      </Text>
                    </View>
                    <Text className="hospital-distance">{hospital.distance}</Text>
                  </View>
                  <View className="hospital-info">
                    <Text className="hospital-address">{hospital.address}</Text>
                  </View>
                  <View className="hospital-footer">
                    <View className="footer-actions">
                      <View className="action-btn" onClick={(e) => {
                        e.stopPropagation();
                        onHospitalClick(hospital);
                      }}>
                        <Text className="action-icon">&#9673;</Text>
                        <Text className="action-text">导航</Text>
                      </View>
                      <View className="action-btn" onClick={(e) => {
                        e.stopPropagation();
                        onCallPhone(hospital.phone);
                      }}>
                        <Text className="action-icon">&#9742;</Text>
                        <Text className="action-text">电话</Text>
                      </View>
                    </View>
                    <Text className="hospital-phone">{hospital.phone}</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View className="empty-state">
              <Text className="empty-icon">&#128204;</Text>
              <Text className="empty-text">暂无附近回收点</Text>
              <Text className="empty-desc">请授权位置信息后重试</Text>
            </View>
          )}
        </View>

        {/* 回收指南 */}
        <View className="section">
          <View className="section-title">回收指南</View>
          <View className="guideline-list">
            {RECYCLE_GUIDELINES.map((item, index) => (
              <View key={index} className="guideline-card">
                <Text className="guideline-title">{item.title}</Text>
                <Text className="guideline-content">{item.content}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
