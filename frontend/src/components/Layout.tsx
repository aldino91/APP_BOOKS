/* eslint-disable curly */
import React from 'react';
import {View, ScrollView} from 'react-native';
import ItemsBook, {DataInfo} from './ItemsBook';
import UseGetAllBooksQuery from '../hooks/UseGetAllBooksQuery';
import RespError from './RespError';
import Loading from './Loading';
import EmptyLibrary from './EmptyLibrary';

export default function Layout() {
  const {data, isLoading, error} = UseGetAllBooksQuery();

  if (error) return <RespError />;

  if (isLoading) return <Loading />;

  if (data.length === 0) return <EmptyLibrary />;

  return (
    <View className="h-screen pb-10">
      <ScrollView>
        <ItemsBook dataBook={data as DataInfo[]} />
      </ScrollView>
    </View>
  );
}
