import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #000000;
  padding: 16px;
`;

export const Header = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const EditButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;

export const EditIcon = styled(MaterialIcons)``;

export const Main = styled.View``;

export const Title = styled.Text``;

export const Users = styled.View``;

export const User = styled.View``;

export const UserName = styled.Text`
  color: #fff;
`;
