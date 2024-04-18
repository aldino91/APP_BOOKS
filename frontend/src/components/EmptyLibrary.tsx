import React from 'react';
import {Text, View} from 'react-native';

export default function EmptyLibrary() {
  return (
    <View className="w-full flex-col justify-center h-3/4">
      <Text className="font-bold text-center text-lg">
        The library is empty...
      </Text>
    </View>
  );
}
