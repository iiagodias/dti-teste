import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import SearchBox from '../../components/SearchBox';
import { IAplicationStates } from '../../stores';
import { Body, Container, ContainerOrder, ContainerOrderButton, Orderby, Scroll, TypeOrder } from './styles';

const Home: React.FC = () => {
  const {data} = useSelector((state: IAplicationStates) => state.movies);

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
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Body>
      </Scroll>
    </Container>
  );
}

export default Home;