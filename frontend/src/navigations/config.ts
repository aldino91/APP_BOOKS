import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  InfoBook: {
    data: {
      id: string;
      title: string;
      author: string;
      descriptions: string;
      completedAt: string;
    };
  };
  EditBook: {
    data: {
      id: string;
      title: string;
      author: string;
      descriptions: string;
      completedAt: string;
    };
  };
  Home: {
    data: {
      id: string;
      title: string;
      author: string;
      descriptions: string;
      completedAt: string;
    };
  };
};

export type RootStackParamListInfoBook = {
  InfoBook: {
    data: {
      id: string;
    };
  };
  EditBook: {
    data: {
      id: string;
    };
  };
};

export type ScreenBRoutePropInfoBook = RouteProp<
  RootStackParamListInfoBook,
  'InfoBook' | 'EditBook'
>;

export type ScreenBNavigationPropInfoBook = NativeStackNavigationProp<
  RootStackParamListInfoBook,
  'InfoBook' | 'EditBook'
>;

export type ScreenBRouteProp = RouteProp<
  RootStackParamList,
  'Home' | 'EditBook'
>;

export type ScreenBNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EditBook' | 'Home'
>;

export type InfoProps = {
  route: ScreenBRouteProp;
  navigation: ScreenBNavigationProp;
};

export type InfoPropsInfoBook = {
  route: ScreenBRoutePropInfoBook;
  navigation: ScreenBNavigationPropInfoBook;
};
