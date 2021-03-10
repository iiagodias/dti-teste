import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';


const Stack = createStackNavigator();

const MainStack: React.FC = () =>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default MainStack;