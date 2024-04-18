import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {colorBg} from '../constants/colors';
import {handleSubmit} from '../http-functions/functionsQuery';
import UseAddNewBookQuery from '../hooks/UseAddNewBookQuery';

export interface Book {
  title: string;
  descriptions: string;
  author: string;
}

export default function Form() {
  const mutate = UseAddNewBookQuery();
  const [title, setTitle] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <View className="flex-row justify-center w-full h-full">
      <ScrollView>
        <View className="p-5 flex-col space-y-10 w-full">
          <View>
            <Text className="text-3xl text-center font-bold text-gray-700">
              Añade un libro
            </Text>
          </View>
          <View>
            <Text className=" font-bold pb-2 text-lg">Title</Text>
            <TextInput
              className="border border-gray-400 rounded-md p-4 "
              placeholder="Título"
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View>
            <Text className=" font-bold pb-2 text-lg">Descripctions</Text>
            <TextInput
              className="border border-gray-400 rounded-md p-4 h-32"
              placeholder="Descripctions"
              multiline={true}
              value={descriptions}
              onChangeText={setDescriptions}
            />
          </View>
          <View>
            <Text className="font-bold pb-2 text-lg">Author</Text>
            <TextInput
              className="border border-gray-400 rounded-md p-4 "
              placeholder="Author"
              value={author}
              onChangeText={setAuthor}
            />
          </View>

          <TouchableOpacity
            onPress={() =>
              handleSubmit({
                mutate,
                title,
                descriptions,
                author,
                setTitle,
                setDescriptions,
                setAuthor,
              })
            }>
            <View
              className="w-full rounded-md p-4"
              style={{backgroundColor: colorBg}}>
              <Text className="text-center text-white">Guardar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
