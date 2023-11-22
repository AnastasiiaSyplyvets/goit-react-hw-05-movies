import axios from 'axios';

function fetchTrends() {
  return axios.get(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=a42bf4f31f7d8fb3cfc076b340ef7462'
  );
}
export default fetchTrends;
