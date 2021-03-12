import { AnyAction } from 'redux';

export interface ITypes {
  GET_MOVIE_REQUEST: string,
  GET_MOVIE_SUCCESS: string,
  GET_MOVIE_FAILED: string
}


export interface ICreators {
  GetMovieRequest(title: string, year: string | null): AnyAction,
  GetMovieSuccess(data: IMovie[]): AnyAction,
  GetMovieFailed(): AnyAction
}

export interface IGetMovieRequestAction {
  type: string,
  title: string,
  year: string | null
}
export interface IGetMovieSuccessAction {
  type: string,
  data: IMovie[]
}

export interface IRating {
  Source: string,
  Value: string
}

export interface IMovie {
  Title: string
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Poster: string,
  Ratings: IRating[],
  Metascore: string,
  imdbRating: string,
  imdbID: string,
}

export interface IMoviesState {
  readonly data: IMovie[]
  readonly loading: boolean
}
