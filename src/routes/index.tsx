import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStack from './MainStack';

const routes: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default routes;