import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppStack from './src/Route/AppStack';
// import NavigationContainer from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
