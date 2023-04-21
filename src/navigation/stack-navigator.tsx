import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack/lib/typescript/src/types';
import {DetailsScreen, MainScreen} from '../screens';
import {ROUTER_NAMES} from './types';
import GoBackButton from '../components/go-back-button';

const Stack = createNativeStackNavigator();

const nullHeader = () => null;

const screenOptions: (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => NativeStackNavigationOptions = ({navigation}) => ({
  headerLeft: () => <GoBackButton onPress={navigation.goBack} />,
  headerStyle: {
    backgroundColor: '#24292F',
  },
  headerTintColor: '#FFFFFFB3',
  headerTitleAlign: 'center',
});

const screensOptions = {
  [ROUTER_NAMES.MAIN_SCREEN]: {
    title: 'Список событий',
    headerLeft: nullHeader,
  },
  [ROUTER_NAMES.DETAILS_SCREEN]: {
    title: 'Детали события',
  },
};

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={ROUTER_NAMES.MAIN_SCREEN}
        component={MainScreen}
        options={screensOptions[ROUTER_NAMES.MAIN_SCREEN]}
      />
      <Stack.Screen
        name={ROUTER_NAMES.DETAILS_SCREEN}
        component={DetailsScreen}
        options={screensOptions[ROUTER_NAMES.DETAILS_SCREEN]}
      />
    </Stack.Navigator>
  );
}
export default StackNavigator;
