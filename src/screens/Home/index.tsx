import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import SearchBox from '../../components/SearchBox';
import { IAplicationStates } from '../../stores';
import { Body, BoxLoading, Container, ContainerOrder, ContainerOrderButton, Orderby, Scroll, TypeOrder } from './styles';

const Home: React.FC = () => {
  const {loading, data} = useSelector((state: IAplicationStates) => state.movies);

  return (
    <Container>
      <SearchBox />
      <ContainerOrder>
        <ContainerOrderButton>
          <TypeOrder>Organizar por titúlo</TypeOrder>
        </ContainerOrderButton>
        <ContainerOrderButton>
          <Orderby>A - z</Orderby>
        </ContainerOrderButton>
      </ContainerOrder>
      <Scroll>
        <Body>

          {!loading ?
            data.map((movie) =>
             <MovieCard poster={movie.Poster} title={movie.Title} rating={movie.imdbRating} movie={movie} />
            )
            :
            <BoxLoading>
              <ActivityIndicator size="large" />
            </BoxLoading>
          }
        </Body>
      </Scroll>
    </Container>
  );
}

export default Home;