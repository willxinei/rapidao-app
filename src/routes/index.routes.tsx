/* eslint-disable import/extensions */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
   );
};

export default Routes;
