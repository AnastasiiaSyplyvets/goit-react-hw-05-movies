import React from 'react';
import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

import '../components/movies.css';

import css from '../components/styles/movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [SearchedMovie, setSearchedMovie] = useState(null);

  const [params, setParams] = useSearchParams();

  const location = useLocation();

  // console.log(params.get('filter'));

  const handleInputValue = e => {
    setSearchQuery(e.target.value);
    setParams({ query: e.target.value });

    // location.state = e.target.value;

    // setParams({ filter: e.target.value });
    // console.log(e.target.value);
  };

  const fetchRequest = () => {
    if (searchQuery === '') {
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=a42bf4f31f7d8fb3cfc076b340ef7462`
    )
      .then(res => res.json())
      .then(data => {
        if (data.results.length === 0) {
          Toastify({
            text: 'No data found!',
            duration: 3000,
            destination: 'https://github.com/apvarun/toastify-js',
            newWindow: true,
            close: true,
            gravity: 'top', // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background:
                'radial-gradient(circle, rgba(236,9,32,1) 0%, rgba(42,20,18,1) 100%)',
            },
            onClick: function () {}, // Callback after click
          }).showToast();
        }

        setSearchedMovie(data.results);
      })
      .catch(err => console.log(err));
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    fetchRequest();

    // setParams({ query: input.target.value });
  };

  const getMovieId = () => {
    if (!SearchedMovie) {
      return;
    }
    SearchedMovie.map(movie =>
      // setParams({ filter: e.target.value });
      setParams({ id: movie.id })
    );
  };

  console.log(params);
  console.log('location', location);
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          className={css.input}
          id="input"
          onChange={handleInputValue}
        ></input>
        <button className={css.searchBtn}>Search</button>
      </form>

      {SearchedMovie &&
        SearchedMovie.map(movie => {
          return (
            <ul className={css.movieList} key={movie.id}>
              <li>
                <Link
                  state={{ from: location }}
                  onClick={getMovieId}
                  to={`/movies/${movie.id}`}
                >
                  {movie.title}
                </Link>
              </li>
            </ul>
          );
        })}
    </>
  );
};

export default Movies;
