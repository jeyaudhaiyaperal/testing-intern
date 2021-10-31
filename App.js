import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import NavigationStack from './src/navigation/NavigationStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}