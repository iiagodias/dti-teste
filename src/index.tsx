import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { store } from './stores';
import { primary } from './themes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={primary}>
        <Routes/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;