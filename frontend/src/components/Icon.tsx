import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  icon?: string;
  color?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Icon({icon, color = 'black'}: Props) {
  return (
    <View>
      <Text>Icon</Text>
    </View>
  );
}
