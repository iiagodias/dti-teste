import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { DefaultTheme, withTheme } from 'styled-components/native';
import { Creators as MoviesActions } from '../../stores/ducks/movies';
import { Container, ContainerSearch, Input, InputMask } from './styles';
interface ISearchBoxProps{
  theme: DefaultTheme
}

const SearchBox: React.FC<ISearchBoxProps> = ({theme}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const searchMovie = () =>{
    if(title == ''){
      Alert.alert('Aviso', 'Digite o título do filme.');
      return;
    }
    dispatch(MoviesActions.GetMovieRequest(title, year));
  }

  return (
    <Container>
      <Input
       value={title}
       onChangeText={(text) => setTitle(text)}
       testID="input-title"
       placeholder="Digite o nome" />
      <InputMask
       value={year}
       onChangeText={(text) => setYear(text)}
       type={'datetime'}
       options={{
        format: 'YYYY'
       }}
       placeholder="Ano" />
      <ContainerSearch testID="button-submit" onPress={searchMovie}>
        <Icon name="search" size={30} color={theme.secondary} />
      </ContainerSearch>
    </Container>
  );
}

export default withTheme(SearchBox);