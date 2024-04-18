import React from 'react';
import {Text, View} from 'react-native';

export default function RespError() {
  return (
    <View className="w-full flex-col justify-center h-full">
      <Text className="font-bold text-center text-lg">
        We have a problem please try again later...
      </Text>
    </View>
  );
}
