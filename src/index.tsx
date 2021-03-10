import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { primary } from './themes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={primary}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;