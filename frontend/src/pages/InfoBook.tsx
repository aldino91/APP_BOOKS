import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../components/Icon';
import {
  InfoPropsInfoBook,
  ScreenBNavigationPropInfoBook,
} from '../navigations/config';
import {colorBg} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import UseDeleteBookQuery from '../hooks/UseDeleteBookQuery';
import UseGetBookByIdQuery from '../hooks/UseGetBookByIdQuery';
import Loading from '../components/Loading';
import RespError from '../components/RespError';
import {handleDeleteBook} from '../http-functions/functionsQuery';
import {useQueryClient} from '@tanstack/react-query';

export default function InfoBook({route, navigation}: InfoPropsInfoBook) {
  const queryClient = useQueryClient();
  const nav = useNavigation<ScreenBNavigationPropInfoBook>();

  const {id} = route.params?.data;

  const {data, isLoading, error} = UseGetBookByIdQuery(id);

  const {mutate} = UseDeleteBookQuery();

  const book = data ? data[1] : undefined;

  const handleEditBook = () => {
    nav.push('EditBook', {data: {id}});
  };

  if (isLoading) return <Loading />;

  if (error) return <RespError />;

  return (
    <ScrollView>
      <View className="flex-col space-y-6 px-6 pb-5">
        <View className="w-full mt-4">
          <Text className="text-4xl font-bold">{book.title}</Text>
        </View>
        <View>
          <Text className="text-2xl font-bold text-gray-600">
            Descriptions:
          </Text>
          <Text className="text-xl px-2">{book.descriptions}</Text>
        </View>
        <View className="border-t-2 border-gray-300">
          <Text className="text-2xl font-bold text-gray-600">Author:</Text>
          <Text className="text-xl px-2">{book.author}</Text>
        </View>
        <View className="border-t-2 border-gray-300">
          <Text className="text-2xl font-bold text-gray-600">Create:</Text>
          <Text className="text-xl px-2">{book.completedAt}</Text>
        </View>

        <View className="flex-row justify-between align-middle w-full pb-10">
          <TouchableOpacity
            onPress={handleEditBook}
            className="w-1/3  rounded-md items-center p-2"
            style={styles.edit}>
            <View>
              <Icon icon="pencil" color="green" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleDeleteBook({id, mutate, navigation, queryClient})
            }
            className="w-1/3 items-center p-2"
            style={styles.delete}>
            <View>
              <Icon icon="trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  edit: {
    borderBottomColor: colorBg,
    borderBottomWidth: 1,
    borderLeftColor: colorBg,
    borderLeftWidth: 1,
    borderRadius: 5,
  },
  delete: {
    borderBottomColor: '#ec5353',
    borderBottomWidth: 1,
    borderRightColor: '#ec5353',
    borderRightWidth: 1,
    borderRadius: 5,
  },
});
