import { useState, useEffect } from 'react';
import { View, WebView } from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro';
import './webview.scss';

export default function WebviewPage() {
  const [url, setUrl] = useState('');

  useLoad((options: any) => {
    if (options?.url) {
      setUrl(decodeURIComponent(options.url));
    }
  });

  if (!url) {
    return (
      <View className="webview-empty">
        <View className="empty-content">
          <View className="empty-icon">&#128279;</View>
          <View className="empty-text">无法加载页面</View>
        </View>
      </View>
    );
  }

  return (
    <WebView
      src={url}
      onMessage={(e) => {
        console.log('WebView message:', e);
      }}
      onLoad={(e) => {
        console.log('WebView loaded:', e);
      }}
      onError={(e) => {
        console.error('WebView error:', e);
        Taro.showToast({ title: '页面加载失败', icon: 'none' });
      }}
    />
  );
}
