import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import sagasManager from './configs/sagasManager';

const sagaMiddleware = createSagaMiddleware();
let composeEnhancers = compose;
if (window) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const finalCreateStore = composeEnhancers(applyMiddleware(sagaMiddleware))(
  createStore,
);

const store = finalCreateStore(reducer, {});
sagaMiddleware.run(sagasManager.getRootSaga());

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    const nextReducer = reducer;
    store.replaceReducer(nextReducer);
  });
}

export default store;
