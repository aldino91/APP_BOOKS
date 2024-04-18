import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from './Icon';
import {useNavigation} from '@react-navigation/native';

export default function AppBar() {
  const navigation = useNavigation();
  const goToAddBookPage = () => {
    navigation.navigate('AddBook' as never);
  };

  return (
    <View className="bg-zinc-300 flex-row justify-between  px-2 py-2 items-center">
      <View className="flex-row justify-start items-center">
        <Text className="font-bold text-base">Lista de libros</Text>
      </View>
      <TouchableOpacity onPress={goToAddBookPage}>
        <Icon icon="add-circle-outline" />
      </TouchableOpacity>
    </View>
  );
}
