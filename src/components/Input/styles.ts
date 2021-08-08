/* eslint-disable import/prefer-default-export */
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
   isFocused: boolean;
   isErrored: boolean;
}

export const Container = styled(TextInput)`
   color: ${({ theme: h }) => h.colors.text};
   font-family: ${({ theme }) => theme.fonts.regular};

   width: ${RFValue(273)}px;
   height: ${RFValue(42)}px;

   border-radius: 30px;
   background-color: ${({ theme }) => theme.colors.secudary_light};
`;

export const Title = styled.Text``;
