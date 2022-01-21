import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

import logo from '../../assets/netflix-logo-short.png'

import { 
  Container,
  Wrapper,
  Header,
  Top,
  Logo,
  Buttons,
  Back,
  ImageProfile,
  Categories,
  LogoMovie,
  Title,
  Category,
  Bottom,
  ButtonTransparent,
  ButtunTransparentText,
  Button,
  ButtonText,
  Main,
  CategoryTitle
} from './styles';

import tmdb from '../../data/data';
import { RowMovies } from '../../components/RowMovies';

export function Home({ navigation, route }) {

  const {height} = Dimensions.get('screen')

  const [emphasisThumbnail, setEmphasisThumbnail] = useState()
  const [logoMovie, setLogoMovie] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(async () => {
    await loadDetails()
  }, [])

  async function loadDetails() {
    const movieEmphasis = await tmdb.getMovieEmphasis()
    setEmphasisThumbnail(movieEmphasis.thumbanil)
    setLogoMovie(await movieEmphasis.logo)

    setCategories(await tmdb.getCategories())
  }

  return (
    <Container>
      <Top>
        <Logo source={logo} />

        <Buttons>
          <MaterialIcons name="search" size={24} color="white" />

          <Back activeOpacity={0.7} onPress={() => navigation.goBack()}>
            <ImageProfile source={{uri: route.params.image}} />
          </Back>
        </Buttons>
      </Top>
      
      <Wrapper>
        <Header height={height} source={{uri: emphasisThumbnail}} resizeMode="cover">
          <Categories>
            <Category>TV Shows</Category>
            <Category>Movies</Category>
            <Category>Series</Category>
          </Categories>

          <LogoMovie source={{uri: logoMovie}} />

          <Bottom colors={['rgba(0, 0, 0, 0)', '#000000']}>
              <ButtonTransparent >
                <MaterialIcons name="add" size={24} color="white" />
                <ButtunTransparentText>Minha lista</ButtunTransparentText>
              </ButtonTransparent>

              <Button>
                <MaterialIcons name="play-arrow" size={16} color="black" />
                <ButtonText>Assistir</ButtonText>
              </Button>

              <ButtonTransparent>
                <MaterialIcons name="info-outline" size={24} color="white" />
                <ButtunTransparentText>Info</ButtunTransparentText>
              </ButtonTransparent>
          </Bottom>
        </Header>

        <Main>
          {categories.map(items => (
            <>
              <CategoryTitle key={items.id}>{items.title}</CategoryTitle>
              <RowMovies movies={items.items} />
            </>
          ))}

        </Main>
      </Wrapper>
    </Container>
  );
};
