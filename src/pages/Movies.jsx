import React from 'react';
import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import fetchMovies from '../components/FetchAPIs/fetchMovies';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

import '../components/movies.css';

import css from '../components/styles/movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [SearchedMovie, setSearchedMovie] = useState(null);

  const [params, setParams] = useSearchParams();

  const location = useLocation();

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

    fetchMovies(searchQuery)
      .then(function (response) {
        if (response.data.results.length === 0) {
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

        setSearchedMovie(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
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
