import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../shared/screens/Home';
import Details from '../../shared/screens/Details';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
