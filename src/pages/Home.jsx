import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import fetchTrends from '../components/FetchAPIs/FetchAPIs';
import { MovieList } from 'components/MovieList/MovieList.1';

import css from '../components/styles/home.module.css';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [, setParams] = useSearchParams();

  const handleTrend = () => {
    trends.map(trend => setParams({ id: trend.id }));
  };

  useEffect(() => {
    fetchTrends()
      .then(function (response) {
        setTrends(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <p className={css.title}>Trending Today</p>
      <ul>
        {trends.map(film =>
          film.title ? (
            <MovieList
              movie={film}
              onClickFunction={handleTrend}
              key={film.id}
            />
          ) : null
        )}
      </ul>
    </>
  );
};

export default Home;
