import Toast from 'react-native-toast-message';
import {Book} from '../pages/AddBook';
import {
  QueryClient,
  UseMutateFunction,
  UseMutationResult,
} from '@tanstack/react-query';
import {UpdateBook} from '../pages/EditBook';
import {
  ScreenBNavigationProp,
  ScreenBNavigationPropInfoBook,
} from '../navigations/config';

interface CreateProps {
  mutate: UseMutationResult<any, Error, Book, void>;
  title: string;
  descriptions: string;
  author: string;
  setTitle: (arg: string) => void;
  setDescriptions: (arg: string) => void;
  setAuthor: (arg: string) => void;
}

export const handleSubmit = ({
  mutate,
  title,
  author,
  descriptions,
  setTitle,
  setDescriptions,
  setAuthor,
}: CreateProps) => {
  if (title === '' || title === undefined) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'The title is missing',
    });
  } else if (descriptions === '' || descriptions === undefined) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'The descriptions is missing',
    });
  } else if (author === '' || author === undefined) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'The author is missing',
    });
  } else {
    const data: Book = {
      title,
      descriptions,
      author,
    };
    mutate.mutate(data);
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Successfully saved book!',
    });
    setTitle('');
    setDescriptions('');
    setAuthor('');
  }
};

interface UpdateProps {
  mutate: UseMutationResult<any, Error, UpdateBook, unknown>;
  id: string;
  title: string;
  descriptions: string;
  author: string;
  completedAt: string;
  navigation: ScreenBNavigationProp;
}

export const handleSubmitUpdate = async ({
  mutate,
  id,
  title,
  author,
  descriptions,
  completedAt,
  navigation,
}: UpdateProps) => {
  const data: UpdateBook = {
    id,
    title,
    descriptions,
    author,
    completedAt,
  };

  try {
    await mutate.mutate(data);
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Correctly updated book!',
    });
    navigation.push('Home', {
      data: data,
    });
  } catch (error) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'We were unable to update the book!',
    });
  }
};

interface DeleteProps {
  id: string;
  mutate: UseMutateFunction<any, Error, string, unknown>;
  navigation: ScreenBNavigationPropInfoBook;
  queryClient: QueryClient;
}

export const handleDeleteBook = async ({
  id,
  mutate,
  navigation,
  queryClient,
}: DeleteProps) => {
  console.log('delete');
  try {
    await mutate(id);
    await queryClient.invalidateQueries({queryKey: ['books']});
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'successfully cancelled book!',
    });
    navigation.goBack();
  } catch (error) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'we were unable to cancel the book!',
    });
    throw error;
  }
};
