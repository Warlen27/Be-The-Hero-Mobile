import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: #333333;
  padding-top: ${Constants.statusBarHeight + 20}px;
` 

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #f1f1f1;
`;

export const HeaderTextBold  = styled.Text`
  font-weight: bold;
  color: #f1f1f1;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #f1f1f1;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #f1f1f1;
`;


export const FlatList = styled.FlatList`
    margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #444444;
  
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #f1f1f1;
`;

export const IncidentValue = styled.Text`
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 24px;  
  color: #ec381c;
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const DetailsButtonText = styled.Text`
    color: #8e4dff;
    font-size: 15px;
    font-weight: bold;
`;
