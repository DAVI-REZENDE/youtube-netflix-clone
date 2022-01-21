import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #000000;
  padding: 16px;
  padding-bottom: 40px;
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

export const Main = styled.View`
  margin-top: 40px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const Users = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const User = styled.TouchableOpacity`
  padding: 5%;
  justify-content: space-between;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-top: 8px;
`;
