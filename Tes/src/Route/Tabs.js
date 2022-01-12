import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeSc from '../Ini/HomeSc';
import Sets from '../Ini/Set';
import Yser from '../Ini/user';
import Ion from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        //   tabBarBackground:()=>(),
        headerShown: false,
        tabBarHideOnKeyboard: true,
        // tabBarInactiveBackgroundColor: 'grey',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#E3562A',
        tabBarStyle: {
          height: '10%',
          padding: 10,
          paddingBottom: 10,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          borderTopWidth: 1,
          borderColor: 'black',
          // backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Homes"
        component={HomeSc}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ion name="book" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Yser}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ion name="user" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Sets}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ion name="setting" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
