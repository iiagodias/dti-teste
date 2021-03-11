import { createActions, createReducer } from 'reduxsauce';
import { ICreators, IGetMovieSuccessAction, IMoviesState, ITypes } from './types';

export const { Types, Creators } = createActions<ITypes, ICreators>({
  GetMovieRequest: [],
  GetMovieSuccess: ['data'],
  GetMovieFailed: [],
});

const INITIAL_STATE: IMoviesState = {
  loading: false,
  data: []
};


const getMovieRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
});

const getMovieSuccess = (state = INITIAL_STATE, action: IGetMovieSuccessAction) => ({
  ...state,
  data: action.data,
  loading: true
});

const getMovieFailed = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
});


export default createReducer(INITIAL_STATE, {
  [Types.GET_MOVIE_REQUEST]: getMovieRequest,
  [Types.GET_MOVIE_SUCCESS]: getMovieSuccess,
  [Types.GET_MOVIE_FAILED]: getMovieFailed,
});
