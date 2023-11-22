import axios from 'axios';

function Fetchcast(movieId) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a42bf4f31f7d8fb3cfc076b340ef7462`
  );
}

export default Fetchcast;
