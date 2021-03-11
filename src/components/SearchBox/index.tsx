import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DefaultTheme, withTheme } from 'styled-components';
import { Container, ContainerSearch, Input, InputMask } from './styles';

interface ISearchBoxProps{
  theme: DefaultTheme
}

const SearchBox: React.FC<ISearchBoxProps> = ({theme}) => {
  return (
    <Container>
      <Input
       placeholder="Digite o nome" />
      <InputMask
       type={'datetime'}
       options={{
        format: 'YYYY'
       }}
       placeholder="Ano" />
      <ContainerSearch>
        <Icon name="search" size={30} color={theme.secondary} />
      </ContainerSearch>
    </Container>
  );
}

export default withTheme(SearchBox);