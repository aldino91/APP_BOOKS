import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenBNavigationProp} from '../navigations/config';
import {useQueryClient} from '@tanstack/react-query';

export interface DataInfo {
  id: string;
  title: string;
  author: string;
  descriptions: string;
  completedAt: string;
}

interface Props {
  dataBook?: DataInfo[] | undefined | undefined;
}

export default function ItemsBook({dataBook}: Props) {
  const queryClient = useQueryClient();
  const navigation = useNavigation<ScreenBNavigationProp>();

  const goToInfoBooks = async (data: DataInfo) => {
    await queryClient.invalidateQueries({queryKey: ['book']});
    await navigation.navigate('InfoBook', {data: data});
  };

  return (
    <View className="flex-col space-y-2 mx-1 pb-36 pt-4">
      {dataBook ? (
        dataBook.map((data, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => goToInfoBooks(data)}>
              <View className=" flex-row justify-between items-center px-1 border border-gray-300 rounded-md">
                <View className="w-2/5">
                  <Text className=" text-center font-bold">{data.title}</Text>
                </View>
                <View className="w-3/5 space-y-1 p-1 ">
                  <View className="w-full ">
                    <Text numberOfLines={4} className="text-xs text-center">
                      {data.descriptions}
                    </Text>
                  </View>
                  <View className="w-full ">
                    <Text className="text-center text-xs font-bold">{`Author: ${data.author}`}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <View>
          <Text>No hay libro</Text>
        </View>
      )}
    </View>
  );
}
