import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

export default function BaseInput() {
  const [text, setText] = useState<string>('');

  const onChangeText = (newText: string) => {
    setText(newText);
  };

  return (
    <View className="border border-gray-400 w-2/3 bg-slate-50 py-3 pl-2 ml-2 rounded-md">
      <TextInput placeholder="Busca" onChangeText={onChangeText} value={text} />
    </View>
  );
}
