/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import 'react-native-gesture-handler';
import { NavigationContainer as NavC } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import {
   Castoro_400Regular,
   Castoro_400Regular_Italic,
} from '@expo-google-fonts/castoro';
import { TenorSans_400Regular } from '@expo-google-fonts/tenor-sans';
import { useFonts } from 'expo-font';
import Routes from './src/routes/index.routes';

import theme from './src/global/styles/theme';

const App: React.FC = () => {
   const [fontloaded] = useFonts({
      Castoro_400Regular,
      Castoro_400Regular_Italic,
      TenorSans_400Regular,
   });

   if (!fontloaded) {
      return <AppLoading />;
   }
   return (
      <NavC>
         <ThemeProvider theme={theme}>
            <View style={{ flex: 1 }}>
               <StatusBar style="light" />
               <Routes />
            </View>
         </ThemeProvider>
      </NavC>
   );
};

export default App;
