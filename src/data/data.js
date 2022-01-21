import { api } from "../services/api";

const API_KEY = "5a856a238145c8ba216b01247123feb6"

export default {
  getCategories: async () => {
    return [
      {
        id: '1',
        title: 'Originais da Netflix',
        items: await api.get(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`).then(res => res.data.results)
      },
      {
        id: '2',
        title: 'Recomendados para você',
        items: await api.get(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`).then(res => res.data.results)
      },
      {
        id: '3',
        title: 'Em alta',
        items: await api.get(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`).then(res => res.data.results)
      },
      {
        id: '4',
        title: 'Ação',
        items: await api.get(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`).then(res => res.data.results)
    },

    {
        id: '5',
        title: 'Comédia',
        items: await api.get(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`).then(res => res.data.results)
    },

    {
        id: '6',
        title: 'Terror',
        items: await api.get(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`).then(res => res.data.results)
    },

    {
        id: '7',
        title: 'Romance',
        items: await api.get(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`).then(res => res.data.results)
    },

    ]
  },

  getMovieEmphasis: async () => {
    const movies = await api.get(`/movie/popular?language=pt-BR&api_key=${API_KEY}`).then(res => res.data.results)
    const movie = Math.floor(Math.random() * movies.length);
    const movieEmphasis = movies[movie]

    const imagesMovieEmphasis = await api.get(`https://api.themoviedb.org/3/movie/${movieEmphasis.id}/images?&api_key=${API_KEY}`).then(res => res.data)
    const logoMovieEmphasis = `https://image.tmdb.org/t/p/w500${imagesMovieEmphasis.logos[0].file_path}`
    return {
      logo: logoMovieEmphasis,
      thumbanil: `https://image.tmdb.org/t/p/original${movieEmphasis.backdrop_path}`
    }
  }
}