import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { 
  Container,
  Header,
  EditButton,
  EditIcon,
  Main,
  Title,
  Users,
  User,
  UserName
} from './styles';


export function Profiles({}) {

  const [users, setUsers] = useState([])

  useEffect(async () => {
    const response = await fetch('http://localhost:3000/users')
      .then(res => res.json())

    setUsers(response)
  }, [])

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
            const image = user.image
            // const imageCurrent = require(image)

            return (
              <User key={user.id}>
                <Image source={{uri: image}} style={{width: 200, height: 200}} />
                <UserName>{user.name}</UserName>
              </User>
            )
          })}
        </Users>
      </Main>
    </Container>
  );
};
