import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.View`
  background-color: #000;
  flex: 1;
`;

export const Header = styled.ImageBackground`
  padding: 16px;
  padding-top: 40px;
  position: relative;
  height: ${({height}) => height / 1.4}px;
`;

export const Wrapper = styled.ScrollView`
  flex: 1;
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 56px;
  left: 16px;
  right: 16px;
  z-index: 9999;
`;

export const Logo = styled.Image``;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Back = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const ImageProfile = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 10px;
`;

export const Categories = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 66px;
`;

export const Category = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 5px 8px 9px rgba(0, 0, 0, 1);
`;

export const LogoMovie = styled.Image`
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 40px;
  resize-mode: contain;
  align-self: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  position: absolute;
  bottom: 20%;
  left: 16px;
  box-shadow: 5px 8px 9px rgba(0, 0, 0, 1);
`;

export const Bottom = styled(LinearGradient)`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ButtonTransparent = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  align-items: center;
`;

export const ButtunTransparentText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-top: 8px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-left: 1px;
  font-size: 16px;
`;

export const Main = styled.View`
  padding: 16px;
  margin-top: 24px;
`;

export const CategoryTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  margin-bottom: 16px;
`;
