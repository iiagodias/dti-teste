import { all } from 'redux-saga/effects';
import movieWatcher from './movies';


function* rootSagas() {
  yield all([movieWatcher()]);
}

export default rootSagas;