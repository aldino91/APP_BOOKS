import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function AppBar() {
  const navigation = useNavigation();
  const goToAddBookPage = () => {
    navigation.navigate('AddBook' as never);
  };

  return (
    <View className="bg-zinc-300 flex-row justify-between  px-2 py-2 items-center">
      <View className="flex-row justify-start items-center">
        <Text className="font-bold text-base">List of books</Text>
      </View>
      <TouchableOpacity onPress={goToAddBookPage}>
        <View className="border border-gray-400 rounded-md p-1">
          <Text>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
