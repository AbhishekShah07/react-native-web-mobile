import * as React from 'react';
import {NativeBaseProvider, Text} from 'native-base';
import {Switch, BrowserRouter} from 'react-router-dom';

import Home from './screens/Home/Home';
import Details from './screens/Details/Details';
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
};

const App = () => {
  return (
    <NativeBaseProvider>
      <Text>This is just 123 react</Text>
      <BrowserRouter>
        <Switch>{RouteGenerator(routes)}</Switch>
      </BrowserRouter>
    </NativeBaseProvider>
  );
};

export default App;
