import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './routes';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
