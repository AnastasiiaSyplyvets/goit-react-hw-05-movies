import axios from 'axios';

function fetchMovieDetails(movieId) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=a42bf4f31f7d8fb3cfc076b340ef7462`
  );
}

export default fetchMovieDetails;
