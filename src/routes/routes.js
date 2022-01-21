import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Profiles} from '../screens/Profiles';
import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Profiles" component={Profiles} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}