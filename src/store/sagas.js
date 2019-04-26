// import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";

function* rootSaga() {
  yield [
    // fork(jokeSaga),
    // fork(newsSaga),
    // fork(dreamSaga)
  ];
}

export default rootSaga;