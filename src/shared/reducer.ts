import {combineReducers} from 'redux';
import homeReducer from './screens/Home/reducer';

const rootReducers = combineReducers({
  homeReducer,
});

export default rootReducers;
