import {all, flush, fork, take} from 'redux-saga/effects';
import {buffers, channel} from 'redux-saga';

const TRUE = true;

class SagasManager {
  constructor() {
    const initialBuffers = buffers.expanding(10);
    this.sagasWithArguments = channel(initialBuffers);
  }

  addSagaToRoot(...sagaWithArguments) {
    this.sagasWithArguments.put([...sagaWithArguments]);
  }

  getRootSaga() {
    const sagasChannel = this.sagasWithArguments;
    return function* rootSaga() {
      const initialSagas = yield flush(sagasChannel);
      yield all(
        initialSagas.map(initialSagaWithArguments =>
          fork(...initialSagaWithArguments),
        ),
      );

      while (TRUE) {
        const dynamicSaga = yield take(sagasChannel);
        yield fork(...dynamicSaga);
      }
    };
  }
}

export default new SagasManager();
