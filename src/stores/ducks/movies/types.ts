import { AnyAction } from 'redux';

export interface ITypes {
  GET_MOVIE_REQUEST: string,
  GET_MOVIE_SUCCESS: string,
  GET_MOVIE_FAILED: string
}


export interface ICreators {
  GetMovieRequest(): AnyAction,
  GetMovieSuccess(data: IMovie[]): AnyAction,
  GetMovieFailed(): AnyAction
}

export interface IGetMovieSuccessAction {
  data: IMovie[]
}


export interface IMovie {
  Title: string
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Actors: string,
  Plot: string,
  Language: string,
  Poster: string,
  Ratings: string[],
  Metascore: string,
  imdbRating: string,
  imdbID: string,
}

export interface IMoviesState {
  readonly data: IMovie[]
  readonly loading: boolean
}
