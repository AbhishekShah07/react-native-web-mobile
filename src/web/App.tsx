import * as React from 'react';
import {NativeBaseProvider, Text} from 'native-base';
import {Switch} from 'react-router-dom';

import Home from '../shared/screens/Home/Home';
import Details from '../shared/screens/Details/Details';
import {RouteGenerator} from './RouteGenerator';

const routes = {
  Home: {
    path: '/',
    component: Home,
  },
  Details: {
    path: '/details/:id',
    component: Details,
  },
  Cart: {
    path: '/cart/:id',
    component: Details,
  },
};

const App = () => {
  return (
    <NativeBaseProvider>
      <Text>This is just 123 react</Text>
      <Switch>{RouteGenerator(routes)}</Switch>
    </NativeBaseProvider>
  );
};

export default App;
