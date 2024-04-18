import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {colorBg} from '../constants/colors';
import {handleSubmitUpdate} from '../http-functions/functionsQuery';
import {InfoProps} from '../navigations/config';
import {useUpdateBookQuery} from '../hooks/UseUpdateBookQuery';
import UseGetBookByIdQuery from '../hooks/UseGetBookByIdQuery';
import RespError from '../components/RespError';
import Loading from '../components/Loading';

export interface UpdateBook {
  id: string;
  title: string;
  descriptions: string;
  author: string;
  completedAt: string;
}

export default function Form({route, navigation}: InfoProps) {
  const mutate = useUpdateBookQuery();

  const {id} = route.params?.data || {};

  const {data, isLoading, error} = UseGetBookByIdQuery(id);

  const book = data ? data[1] : undefined;

  const [title, setTitle] = useState(book.title);

  const [descriptions, setDescriptions] = useState(book.descriptions);

  const [author, setAuthor] = useState(book.author);

  if (isLoading) return <Loading />;

  if (error) return <RespError />;

  return (
    <View className="flex-row justify-center w-full h-full">
      <View className="p-5 flex-col space-y-10 w-full">
        <View>
          <Text className="text-3xl text-center font-bold text-gray-700">
            Actualiza el libro
          </Text>
        </View>
        <View>
          <Text className=" font-bold pb-2 text-lg">Title</Text>
          <TextInput
            className="border border-gray-400 rounded-md p-4 "
            placeholder={book.title}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View>
          <Text className=" font-bold pb-2 text-lg">Descripctions</Text>

          <TextInput
            className="border border-gray-400 rounded-md p-4 h-32"
            placeholder={book.descriptions}
            multiline={true}
            value={descriptions}
            onChangeText={setDescriptions}
          />
        </View>
        <View>
          <Text className=" font-bold pb-2 text-lg">Author</Text>
          <TextInput
            className="border border-gray-400 rounded-md p-4 "
            placeholder={book.author}
            value={author}
            onChangeText={setAuthor}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            handleSubmitUpdate({
              mutate,
              id,
              title,
              descriptions,
              author,
              completedAt: '',
              navigation,
            });
          }}>
          <View
            className="w-full rounded-md p-4"
            style={{backgroundColor: colorBg}}>
            <Text className="text-center text-white">Actualizar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
