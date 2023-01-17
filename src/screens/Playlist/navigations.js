import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Lists from './Lists';
import Item from './Item';
import Layout from '../../components/Layout';

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lists" screenOptions={screenOptions}>
        <Stack.Screen name="Lists" component={Lists} />
        <Stack.Screen name="Item" component={Item} />
        {/* <Stack.Screen name="OrderCompleted" component={OrderCompleted} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
