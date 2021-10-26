import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppTabNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppTabNavigation />
    </NavigationContainer>
  );
};

export default App;
