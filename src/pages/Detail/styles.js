import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  background-color: #333333;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
`;

export const Icon = styled.TouchableOpacity`
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #444444;
  margin-top: 48px;
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #f1f1f1;
  margin-top: 24px;
`;

export const IncidentValue = styled.Text`
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 24px;  
  color: #ec381c;
`;

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #444444;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-size: 20px; 
  font-weight: bold; 
  color: #f1f1f1;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  margin-top: 16px;  
  color: #8e4dff;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: #ec381c;
  border-radius: 8px;
  height: 59px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  font-size: 15px;
  font-weight: bold; 
  color: #fff;
`;







