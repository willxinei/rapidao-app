import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { RFPercentage as RF } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const Container = styled(RectButton)`
   background-color: ${({ theme }) => theme.colors.secundary};

   width: ${RF(20)}px;
   height: ${RF(4)}px;

   align-items: center;
   justify-content: center;
   align-self: center;
   border-radius: 25px;
   opacity: 0.8;
`;

export const ButtonText = styled.Text`
   color: ${({ theme }) => theme.colors.text};
   font-family: ${({ theme }) => theme.fonts.tenor};
   font-size: ${RF(2)}px;
`;
