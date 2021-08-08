/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { RFPercentage as RF } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   padding: 25px;
   flex: 1;
   background-color: ${props => props.theme.colors.primary};
`;

export const ContainerImage = styled.View`
   position: absolute;
   top: ${RF(5)}px;
`;

export const ImageFundoA = styled.Image`
   width: ${RF(62)}px;
   height: ${RF(23)}px;

   opacity: 0.5;
`;

export const TextPediu = styled.Text`
   color: ${({ theme }) => theme.colors.text};
   font-family: ${({ theme }) => theme.fonts.tenor};
   font-size: ${RF(4)}px;

   margin-top: ${RF(4)}px;
   left: 20px;
   align-self: flex-start;
`;

export const TextTitle = styled.Text`
   color: ${({ theme }) => theme.colors.text};
   font-family: ${({ theme }) => theme.fonts.tenor};
   font-size: ${RF(10)}px;
   margin-left: ${RF(6)}px;

   margin-top: 10px;
`;

export const TextChegou = styled.Text`
   color: ${({ theme }) => theme.colors.text};
   font-family: ${({ theme }) => theme.fonts.tenor};
   font-size: ${RF(4)}px;

   margin-top: ${RF(4)}px;
   align-self: flex-end;
   margin-right: ${RF(10)}px;
`;

export const Form = styled.View``;
