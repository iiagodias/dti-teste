import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { DefaultTheme, withTheme } from 'styled-components';
import MovieCard from '../../components/MovieCard';
import SearchBox from '../../components/SearchBox';
import { IAplicationStates } from '../../stores';
import { Body, BoxLoading, Container, ContainerOrder, ContainerOrderButton, Orderby, Scroll, TypeOrder } from './styles';

interface IHomeProps {
  theme: DefaultTheme
}

const Home: React.FC<IHomeProps> = ({theme}) => {
  const [order, setOrder] = useState<boolean | "asc" | "desc">('asc');
  const [typOrder, setTypeOrder] = useState<string>('Title');
  const {loading, data} = useSelector((state: IAplicationStates) => state.movies);

  const updateOrder = useCallback(():void =>{
    order  == 'asc' ? setOrder('desc') : setOrder('asc');
  }, [order]);

  const updateTypeOrder = useCallback(():void =>{
    typOrder  == 'Title' ? setTypeOrder('imdbRating') : setTypeOrder('Title');
  }, [typOrder]);


  return (
    <Container>
      <SearchBox />
      <ContainerOrder>
        <ContainerOrderButton onPress={updateTypeOrder}>
          <TypeOrder>{typOrder == 'Title' ? 'Organizar por titúlo' : 'Organizar por avaliação'}</TypeOrder>
        </ContainerOrderButton>
        <ContainerOrderButton onPress={updateOrder}>
          <Orderby>{order == 'asc' ? 'A - z' : 'Z - a'}</Orderby>
        </ContainerOrderButton>
      </ContainerOrder>
      <Scroll>
        <Body>

          {!loading ?
           _.orderBy(data, [typOrder], [order]).map((movie) =>
             <MovieCard key={movie.imdbID} poster={movie.Poster} title={movie.Title} rating={movie.imdbRating} movie={movie} />
            )
            :
            <BoxLoading>
              <ActivityIndicator size="large" color={theme.secondary} />
            </BoxLoading>
          }
        </Body>
      </Scroll>
    </Container>
  );
}

export default withTheme(Home);