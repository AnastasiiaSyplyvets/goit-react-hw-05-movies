import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trends, setTrends] = useState([]);

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

  console.log(trends);

  return (
    <>
      <p>Trending Today</p>
      <ul>
        {trends.map(film =>
          film.title ? (
            <Link to="/movies/:movieId" key={film.id}>
              <li>{film.title}</li>
            </Link>
          ) : null
        )}
      </ul>
    </>
  );
};

export default Home;
