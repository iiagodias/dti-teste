
import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import { IMoviesState } from './ducks/movies/types';

export interface IAplicationStates {
  movies: IMoviesState
}

const sagaMiddleware = createSagaMiddleware();


const store: Store<IAplicationStates> = createStore(reducers, applyMiddleware(sagaMiddleware));


export { store };
