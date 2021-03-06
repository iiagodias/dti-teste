jest.useFakeTimers()

import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import Home from '../src/screens/Home';
import { store } from '../src/stores';
import { primary } from '../src/themes';


const AllTheProviders: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
        <ThemeProvider theme={primary}>
          {children}
        </ThemeProvider>
    </Provider>
  )
}


 it('Theme styled component and redux', () => {
    const {toJSON} = render(<Home />, {wrapper: AllTheProviders});

    expect(toJSON()).toMatchSnapshot()
 });

 it('Render input title search', () => {
  const {getByPlaceholderText} = render(<Home />, {wrapper: AllTheProviders});
  const button = getByPlaceholderText('Digite o nome');
  expect(button).toBeDefined();
});


 it('Render input year', () => {
    const {getByPlaceholderText} = render(<Home />, {wrapper: AllTheProviders});
    const button = getByPlaceholderText('Ano');
    expect(button).toBeDefined();
 });


 it('Render button search', () => {
  const {getByTestId} = render(<Home />, {wrapper: AllTheProviders});
  const button = getByTestId('button-submit');
  expect(button).toBeDefined();
});