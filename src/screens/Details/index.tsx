import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconStar from 'react-native-vector-icons/MaterialIcons';
import { DefaultTheme, withTheme } from 'styled-components';
import {
  Body, BoxData, BoxIcon,
  BoxRating, BoxStar, BoxYear, Container, ContainerData,
  Header, Hr, Poser, Scroll, Text, TextRating, TextYear, Title, TitleHr
} from './styles';

interface IDetailsProps {
  theme: DefaultTheme
}


const Details: React.FC<IDetailsProps> = ({theme}) => {
  const navigation = useNavigation();

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
              <Poser source={{uri: 'https://m.media-amazon.com/images/M/MV5BNTU4ODY0MDgtODg4Mi00ODE3LWIyZTctOWZiM2RjNWM2YmM1XkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_SX300.jpg'}} />
            </BoxData>
            <BoxData>
                <Title>O Homem Que Desafiou o Diabo</Title>
                <BoxYear>
                  <TextYear>2019</TextYear>
                </BoxYear>
                <Text>
                 <Title>Diretor:</Title> Moacyr Góes
                </Text>
                <Text>
                  <Title>Linguagem:</Title> Portuguese
                </Text>
                <Text>
                  <Title>Tempo de duração:</Title> 106 min
                </Text>
            </BoxData>
          </ContainerData>

          <BoxStar>
            <Text>3.5</Text>
            <Stars
              default={3.5}
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
            In the Northeastern of Brazil, the wolf traveling salesman of fabric José Araújo arrives at Jardim dos Caiacós and succeeds in selling his merchandise to the Turkish Turco. He goes to a ball to celebrate the business and he meets Dualiba, the forty and something year-old virgin daughter of Turco. He shags Dualiba and she tells her father what happened, and José Araújo is forced to marry her. When the resigned Araújo discovers that he is the motive of joke in the town, he changes his name to Ojuara and becomes a fearless lonely rider though the countryside of Northeastern to the paradisiacal São Sarué. Along his journey, his name becomes a legend that has defeated the devil and many bullies. He meets the gorgeous Jacirene a.k.a. Genifer in a brothel; the circus acrobat in the trapeze Sue; the evil Mãe de Pantanha and her \"vagina dentata\" (\"toothed vagina\"); and the daughter of a powerful farmer Eleonora.
          </Text>

          <Hr>
           <TitleHr>Gênero</TitleHr>
          </Hr>
          <Text>
            Comedy, Fantasy
          </Text>

          <Hr>
           <TitleHr>Roteiro</TitleHr>
          </Hr>
          <Text>
            Moacyr Góes, Bráulio Tavares, Nei Leandro de Castro
          </Text>

          <Hr>
           <TitleHr>Atores</TitleHr>
          </Hr>
          <Text>
            Marcos Palmeira, Flávia Alessandra, Lívia Falcão, Fernanda Paes Leme
          </Text>

          <Hr>
           <TitleHr>Avaliações</TitleHr>
          </Hr>
          <BoxRating>
            <TextRating>Internet Movie Database</TextRating>
            <TextRating>6.6/10</TextRating>
          </BoxRating>

        </Body>
      </Scroll>
    </Container>
  );
}

export default withTheme(Details);