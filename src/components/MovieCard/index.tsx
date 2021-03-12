import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DefaultTheme, withTheme } from 'styled-components';
import { IMovie } from '../../stores/ducks/movies/types';
import { BoxData, Container, NumberRating, Poster, Title } from './styles';

interface IMovieCardProps {
  theme: DefaultTheme,
  poster: string,
  title: string,
  rating: string,
  movie: IMovie
}

const MovieCard: React.FC<IMovieCardProps> = ({theme, poster, title, rating, movie}) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Details', {movie:movie})}>
      <Poster source={{uri: poster != 'N/A' ? poster : undefined }} />
      <BoxData>
        <Title numberOfLines={2} ellipsizeMode='tail'>{title}</Title>
        <Stars
          default={parseFloat(rating)}
          half={true}
          starSize={25}
          disabled={true}
          spacing={4}
          count={5}
          fullStar={<Icon name={'star'} size={25} color={theme.primary} />}
          emptyStar={<Icon name={'star-outline'} color={theme.primary} size={25} />}
          halfStar={<Icon name={'star-half'} color={theme.primary} size={25} />}
         />
         <NumberRating>
           {rating}
         </NumberRating>
      </BoxData>
    </Container>
  );
}

export default withTheme(MovieCard);