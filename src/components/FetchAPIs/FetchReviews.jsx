import axios from 'axios';

function FetchReviews(movieId) {
  return axios.get(`
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a42bf4f31f7d8fb3cfc076b340ef7462`);
}

export default FetchReviews;
