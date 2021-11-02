import * as React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Switch} from 'react-router-dom';
import {routes} from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import '../shared/screens/Home/saga';

import {RouteGenerator} from './RouteGenerator';

const App = () => {
  console.log(routes);
  return (
    <NativeBaseProvider>
      <Router>
        <Switch>{RouteGenerator(routes)}</Switch>
      </Router>
    </NativeBaseProvider>
  );
};

export default App;
