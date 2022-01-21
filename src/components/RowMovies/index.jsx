import React from 'react';
import { FlatList } from 'react-native';

import { Container, Image } from './styles';

export function RowMovies({ movies }) {

  return (
    <Container>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => {

          const imageUri = `https://image.tmdb.org/t/p/w500${item.poster_path}`

          return (
            <>
              <Image source={{uri: imageUri}} />
            </>
          )
        }}
      />
    </Container>
  );
};