import React, { useEffect, useState } from 'react';
import { Image, Dimensions } from 'react-native';

import { 
  Container,
  Header,
  EditButton,
  EditIcon,
  Main,
  Title,
  Users,
  User,
  ImageProfile,
  UserName
} from './styles';

import {users} from '../../data/users'

export function Profiles({ navigation }) {
  return (
    <Container>
      <Header>
        <Image source={require('../../assets/netflix-logo.png')} />

        <EditButton activeOpacity={0.8}>
          <EditIcon name="edit" size={24} color="white" />
        </EditButton>
      </Header>

      <Main>
        <Title>Who’s Watching?</Title>

        <Users>
          {users.map((user) => {
            return (
              <User 
                key={user.id} 
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Home', {image: user.image})}
              >
                <ImageProfile source={{uri: user.image}} />
                <UserName>{user.name}</UserName>
              </User>
            )
          })}
        </Users>
      </Main>
    </Container>
  );
};
