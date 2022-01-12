import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeSc from '../Ini/HomeSc';
import Tabs from './Tabs';
import Detail from '../Ini/Details';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
