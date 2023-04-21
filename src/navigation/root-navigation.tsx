import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stack-navigator';

function RootNavigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default RootNavigation;
