import { useState, useEffect } from 'react';
import { View, Text, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import NavBar from '../../components/nav-bar';
import './about.scss';

export default function About() {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  useEffect(() => {
    const systemInfo = Taro.getSystemInfoSync();
    setStatusBarHeight(systemInfo.statusBarHeight);
  }, []);

  return (
    <View className="about-container" style={{ paddingTop: `calc(${statusBarHeight}px + 160rpx + 32rpx)` }}>
      <NavBar title="关于我们" showBack />

      <View className="about-content">
        <View className="logo-section">
          <Image className="logo" src="/assets/images/logo.png" mode="aspectFit" />
          <Text className="app-name">medhome</Text>
          <Text className="app-version">v2.0.0</Text>
        </View>

        <View className="info-section">
          <View className="info-item">
            <Text className="info-label">小程序名称</Text>
            <Text className="info-value">medhome</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">版本号</Text>
            <Text className="info-value">v2.0.0</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">开发者</Text>
            <Text className="info-value">RayHo</Text>
          </View>
        </View>

        <View className="copyright-section">
          <Text className="copyright-text">2026 medhome 保留权利</Text>
        </View>
      </View>
    </View>
  );
}
