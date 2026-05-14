import { useState, useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

interface NavBarButton { icon?: string; text?: string; }
interface NavBarProps {
  title?: string;
  showBack?: boolean;
  showHome?: boolean;
  backgroundColor?: string;
  titleColor?: string;
  rightButtons?: NavBarButton[];
  onHome?: () => void;
  onRightButtonClick?: (button: NavBarButton) => void;
}

export default function NavBar(props: NavBarProps) {
  const {
    title = '',
    showBack = true,
    showHome = false,
    backgroundColor = '#ffffff',
    titleColor = '#333333',
    rightButtons = [],
    onHome,
    onRightButtonClick,
  } = props;

  const [statusBarHeight, setStatusBarHeight] = useState(0);
  useEffect(() => {
    const sysInfo = Taro.getSystemInfoSync();
    setStatusBarHeight(sysInfo.statusBarHeight || 0);
  }, []);

  const onBack = () => {
    const pages = Taro.getCurrentPages();
    if (pages.length > 1) Taro.navigateBack({ delta: 1 });
    else Taro.switchTab({ url: '/pages/index/index' });
  };

  const navHeight = statusBarHeight + 44; // 44px ≈ 88rpx

  return (
    <View className='nav-bar' style={{ height: `${navHeight}px`, paddingTop: `${statusBarHeight}px`, backgroundColor }}>
      <View className='nav-bar-left' style={{ top: `${statusBarHeight}px` }}>
        {showBack && <View className='nav-bar-button' onClick={onBack}><Text className='nav-bar-button-icon'>&lt;</Text></View>}
        {showHome && <View className='nav-bar-button' onClick={() => onHome?.()}><Text className='nav-bar-button-icon'>&#8962;</Text></View>}
      </View>
      {title ? (
        <View className='nav-bar-center' style={{ top: `${statusBarHeight}px` }}>
          <View className='nav-bar-title'><Text style={{ color: titleColor }}>{title}</Text></View>
        </View>
      ) : null}
      <View className='nav-bar-right' style={{ top: `${statusBarHeight}px` }}>
        {rightButtons.map((btn, i) => (
          <View key={i} className='nav-bar-button' onClick={() => onRightButtonClick?.(btn)}>
            {btn.icon ? <Text className='nav-bar-button-icon'>{btn.icon}</Text> : <Text className='nav-bar-button-text'>{btn.text}</Text>}
          </View>
        ))}
      </View>
    </View>
  );
}
