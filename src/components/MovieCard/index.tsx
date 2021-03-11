import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DefaultTheme, withTheme } from 'styled-components';
import { BoxData, Container, NumberRating, Poster, Title } from './styles';

interface IMovieCardProps {
  theme: DefaultTheme
}

const MovieCard: React.FC<IMovieCardProps> = ({theme}) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Details')}>
      <Poster source={{uri: 'https://m.media-amazon.com/images/M/MV5BNTU4ODY0MDgtODg4Mi00ODE3LWIyZTctOWZiM2RjNWM2YmM1XkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_SX300.jpg'}} />
      <BoxData>
        <Title numberOfLines={2} ellipsizeMode='tail'>O Homem Que Desafiou o Diabo</Title>
        <Stars
          default={3.5}
          half={true}
          starSize={25}
          disabled={true}
          spacing={4}
          fullStar={<Icon name={'star'} size={25} color={theme.primary} />}
          emptyStar={<Icon name={'star-outline'} color={theme.primary} size={25} />}
          halfStar={<Icon name={'star-half'} color={theme.primary} size={25} />}
         />
         <NumberRating>
           3.5
         </NumberRating>
      </BoxData>
    </Container>
  );
}

export default withTheme(MovieCard);