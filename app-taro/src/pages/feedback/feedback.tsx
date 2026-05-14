import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import NavBar from '../../components/nav-bar';
import './feedback.scss';

export default function Feedback() {
  return (
    <View className="feedback-container">
      <NavBar title="帮助与反馈" showBack />

      <View className="feedback-content">
        <Text className="feedback-title">有问题请发送邮件至</Text>
        <Text className="feedback-email">rayho_bool@outlook.com</Text>
      </View>
    </View>
  );
}
