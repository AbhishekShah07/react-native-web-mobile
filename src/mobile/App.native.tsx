import * as React from 'react';
import {NativeBaseProvider} from 'native-base';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import store from '../shared/store';
import '../shared/screens/Home/saga';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
