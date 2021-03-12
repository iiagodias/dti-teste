import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as MoviesActions, Types } from '../ducks/movies';
import { IGetMovieRequestAction, IMovie } from '../ducks/movies/types';

function* sendGetMovieRequest({ title, year }: IGetMovieRequestAction) {

  try {
    const { data } = yield call(api.get, '', {
      params: {
        s: title,
        y: year
      }
    });

    if (data.Response == "True") {
      const details = data.Search.map((item: IMovie) => call(getDetailsMovie, item.imdbID));
      const response: IMovie[] = yield all(details);

      yield put(MoviesActions.GetMovieSuccess(response));
    } else {
      yield put(MoviesActions.GetMovieFailed());
    }
  } catch (error) {
    Alert.alert('Aviso', 'Ocorreu um erro ao sincronizar os dados.');
    yield put(MoviesActions.GetMovieFailed());
  }
}

function* getDetailsMovie(id: string) {
  const { data } = yield call(api.get, '', {
    params: {
      i: id
    }
  });

  return data;
}

function* sendGetMovieRequestWatch() {
  yield takeLatest(Types.GET_MOVIE_REQUEST, sendGetMovieRequest);
}

export default function* movieWatcher() {
  yield all([
    call(sendGetMovieRequestWatch)
  ]);
}