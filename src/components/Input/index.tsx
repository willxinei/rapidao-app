import React, { useEffect, useRef } from 'react';
import { Text, TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { Container } from './styles';
import theme from '../../global/styles/theme';

interface InputProps extends TextInputProps {
   name: string;
}

interface InputValueRef {
   value: string;
}

export function Input({ name, icon, ...rest }: InputProps) {
   return (
      <Container placeholderTextColor={theme.colors.text} placeholder={name} />
   );
}
