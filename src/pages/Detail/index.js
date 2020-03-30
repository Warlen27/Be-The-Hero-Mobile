import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Linking } from  'react-native';
import { 
  Container, 
  Header, 
  Logo, 
  Icon, 
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  ActionButton,
  ActionText 

} from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {

  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail(){
      MailComposer.composeAsync({
        subject: `Herói do caso: ${incident.title}`,
        recipients: [incident.email],
        body: message,
      })
  }

  function sendWhatsApp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <Container >
      <Header>
        <Logo source={logoImg}/>
        <Icon onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#8e4dff"/>
        </Icon>
        
      </Header>
      <Incident>
      <IncidentProperty>ONG:</IncidentProperty>
  <IncidentValue>{incident.name} de {incident.city}/{incident.uf}</IncidentValue>

          <IncidentProperty>CASO:</IncidentProperty>
          <IncidentValue>{incident.title}</IncidentValue>

          <IncidentProperty>Valor:</IncidentProperty>
          <IncidentValue>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</IncidentValue>

          
        </Incident>
          <ContactBox>
            <HeroTitle>Salve o dia!</HeroTitle>
            <HeroTitle>Seja o herói desse caso.</HeroTitle>

            <HeroDescription>Entre em contato:</HeroDescription>

            <Actions>
             <ActionButton onPress={sendWhatsApp}>
                <ActionText>WhatssApp</ActionText>
             </ActionButton>

             <ActionButton onPress={sendMail}>
                <ActionText>E-mail</ActionText>
             </ActionButton>
            </Actions>
          </ContactBox>
    </Container>
  );
}
