import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import css from '../components/styles/home.module.css';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [params, setParams] = useSearchParams();
  const location = useLocation();

  // const { movieId } = useParams();

  const handleTrend = () => {
    trends.map(trend => setParams({ id: trend.id }));

    console.log(params.get('id'));
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=a42bf4f31f7d8fb3cfc076b340ef7462'
    )
      .then(res => res.json())
      .then(data => {
        setTrends(data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <p className={css.title}>Trending Today</p>
      <ul>
        {trends.map(film =>
          film.title ? (
            <Link
              state={location}
              onClick={handleTrend}
              to={`/movies/${film.id}`}
              key={film.id}
            >
              <li>{film.title}</li>
            </Link>
          ) : null
        )}
      </ul>
    </>
  );
};

export default Home;
