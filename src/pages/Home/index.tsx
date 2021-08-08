import React from 'react';
import { Text, View } from 'react-native';
import {
   Container,
   ContainerImage,
   Form,
   ImageFundoA,
   TextChegou,
   TextPediu,
   TextTitle,
} from './styles';

import fundoA from '../../../assets/images/fundoA.png';
import Button from '../../components/Button';
import { Input } from '../../components/Input';

const Home: React.FC = () => {
   return (
      <Container>
         <ContainerImage>
            <ImageFundoA source={fundoA} />
         </ContainerImage>
         <TextPediu>PEDIU</TextPediu>
         <TextTitle>RAPI</TextTitle>
         <TextTitle>DÃO</TextTitle>
         <TextChegou>CHEGOU</TextChegou>

         <Form>
            <Input name="Email" />
         </Form>
         <Button onPress={() => {}}>ENTRAR</Button>
      </Container>
   );
};

export default Home;
