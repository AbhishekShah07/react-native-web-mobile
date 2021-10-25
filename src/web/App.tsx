import * as React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Switch} from 'react-router-dom';
import {routes} from './routes';

import {RouteGenerator} from './RouteGenerator';

const App = () => {
  return (
    <NativeBaseProvider>
      <Switch>{RouteGenerator(routes)}</Switch>
    </NativeBaseProvider>
  );
};

export default App;
