import React from 'react';
import SearchBox from '../../components/SearchBox';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <SearchBox />
    </Container>
  );
}

export default Home;