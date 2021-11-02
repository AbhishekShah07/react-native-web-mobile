import {INCREMENT, DECREMENT} from './actionTypes';
import sagasManager from '../../configs/sagasManager';
import {takeEvery, all} from '@redux-saga/core/effects';

function* incrementSaga() {
  console.log('increment saga called');
}

function* decrementSaga() {
  console.log('decrement saga called');
}

sagasManager.addSagaToRoot(function* indexSaga() {
  yield all([
    takeEvery(INCREMENT, incrementSaga),
    takeEvery(DECREMENT, decrementSaga),
  ]);
});
