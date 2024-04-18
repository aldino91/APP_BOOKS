import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colorBg} from '../constants/colors';

export default function Loading() {
  return (
    <View className="w-full flex-col justify-center h-full">
      <ActivityIndicator size="large" color={colorBg} />
    </View>
  );
}
