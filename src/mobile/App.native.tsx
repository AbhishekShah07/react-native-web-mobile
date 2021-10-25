import * as React from 'react';
import {NativeBaseProvider, Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../shared/screens/Home/Home';
import Details from '../shared/screens/Details/Details';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <Text>This is react native</Text>
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
