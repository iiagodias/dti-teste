import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconStar from 'react-native-vector-icons/MaterialIcons';
import { DefaultTheme, withTheme } from 'styled-components/native';
import { IMovie } from '../../stores/ducks/movies/types';
import {
  Body, BoxData, BoxIcon,
  BoxRating, BoxStar, BoxYear, Container, ContainerData,
  Header, Hr, Poser, Scroll, Text, TextRating, TextYear, Title, TitleHr
} from './styles';

interface IDetailsProps {
  theme: DefaultTheme
}

type RootStackParamList = {
  Details: {movie: IMovie};
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const Details: React.FC<IDetailsProps> = ({theme}) => {
  const navigation = useNavigation();
  const route = useRoute<DetailsScreenRouteProp>();
  const { movie } = route.params;

  return (
    <Container>
      <Header>
        <BoxIcon onPress={navigation.goBack}>
          <Icon name={'angle-left'} size={45} color={theme.secondary} />
        </BoxIcon>
      </Header>
      <Scroll>
        <Body>
          <ContainerData>
            <BoxData>
              <Poser source={{uri: movie.Poster != 'N/A' ? movie.Poster : undefined }} />
            </BoxData>
            <BoxData>
                <Title>{movie.Title}</Title>
                <BoxYear>
                  <TextYear>{movie.Year}</TextYear>
                </BoxYear>
                <Text>
                 <Title>Diretor:</Title> {movie.Director}
                </Text>
                <Text>
                  <Title>Linguagem:</Title> {movie.Language}
                </Text>
                <Text>
                  <Title>Tempo de duração:</Title> {movie.Runtime}
                </Text>
            </BoxData>
          </ContainerData>

          <BoxStar>
            <Text>{movie.imdbRating}</Text>
            <Stars
              default={parseFloat(movie.imdbRating)}
              half={true}
              starSize={25}
              disabled={true}
              spacing={4}
              fullStar={<IconStar name={'star'} size={25} color={theme.primary} />}
              emptyStar={<IconStar name={'star-outline'} color={theme.primary} size={25} />}
              halfStar={<IconStar name={'star-half'} color={theme.primary} size={25} />}
            />
          </BoxStar>

          <Hr>
           <TitleHr>Sinopse</TitleHr>
          </Hr>
          <Text>
            {movie.Plot}
          </Text>

          <Hr>
           <TitleHr>Gênero</TitleHr>
          </Hr>
          <Text>
            {movie.Genre}
          </Text>

          <Hr>
           <TitleHr>Roteiro</TitleHr>
          </Hr>
          <Text>
            {movie.Writer}
          </Text>

          <Hr>
           <TitleHr>Atores</TitleHr>
          </Hr>
          <Text>
           {movie.Actors}
          </Text>

          <Hr>
           <TitleHr>Avaliações</TitleHr>
          </Hr>
          {movie.Ratings.map((item, key) =>
            <BoxRating key={key}>
              <TextRating>{item.Source}</TextRating>
              <TextRating>{item.Value}</TextRating>
            </BoxRating>
          )}
        </Body>
      </Scroll>
    </Container>
  );
}

export default withTheme(Details);