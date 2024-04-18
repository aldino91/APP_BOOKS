import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Main from '../pages/Main';
import InfoBook from '../pages/InfoBook';
import AddBook from '../pages/AddBook';
import EditBook from '../pages/EditBook';
import {ScreenBRouteProp, ScreenBRoutePropInfoBook} from './config';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import {colorBg} from '../constants/colors';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function Navigations() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'white',
          }}
          initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Main}
            options={{
              title: 'Books',
              headerStyle: {
                backgroundColor: colorBg,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 28,
              },
            }}
          />
          <Stack.Screen
            name="InfoBook"
            children={props => (
              <InfoBook
                route={props.route as ScreenBRoutePropInfoBook}
                navigation={props.navigation}
              />
            )}
            options={options}
          />
          <Stack.Screen name="AddBook" component={AddBook} options={options} />
          <Stack.Screen
            name="EditBook"
            children={props => (
              <EditBook
                route={props.route as ScreenBRouteProp}
                navigation={props.navigation}
              />
            )}
            options={options}
          />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const options: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: colorBg,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 28,
  },
};
