import axios from 'axios';

function fetchMovies(searchQuery) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=a42bf4f31f7d8fb3cfc076b340ef7462`
  );
}

export default fetchMovies;
