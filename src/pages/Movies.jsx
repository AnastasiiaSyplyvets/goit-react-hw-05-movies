import React from 'react';
import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import fetchMovies from '../components/FetchAPIs/fetchMovies';
import { toast } from 'react-toastify';

import 'toastify-js/src/toastify.css';

import '../components/movies.css';

import css from '../components/styles/movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [SearchedMovie, setSearchedMovie] = useState(null);

  const [SearchParams, setSearchParams] = useSearchParams();
  const MovieName = SearchParams.get('query');
  const location = useLocation();

  console.log(location);

  // const visibleMovies = SearchedMovie.filter(item => item.includes(MovieName));

  const handleInputValue = e => {
    setSearchQuery(e.target.value);
    setSearchParams({ query: e.target.value });

    // location.state = e.target.value;

    // setParams({ filter: e.target.value });
  };

  const fetchRequest = () => {
    if (searchQuery === '') {
      return;
    }

    console.log('query', MovieName);

    fetchMovies(MovieName)
      .then(function (response) {
        if (response.data.results.length === 0) {
          toast.error('No movies found :(', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }

        setSearchedMovie(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (searchQuery === '') {
      toast.info('Please enter movie name!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    setSearchParams({ query: searchQuery });

    fetchRequest();
  };

  // useEffect(() => {
  //   if (searchQuery === '') {
  //     return;
  //   }

  //   console.log('query', MovieName);

  //   fetchMovies(MovieName)
  //     .then(function (response) {
  //       if (response.data.results.length === 0) {
  //         toast.error('No movies found :(', {
  //           position: 'top-right',
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: 'colored',
  //         });
  //       }

  //       setSearchedMovie(response.data.results);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [MovieName, searchQuery]);

  const getMovieId = () => {
    if (!SearchedMovie) {
      return;
    }

    SearchedMovie.map(movie =>
      // setParams({ filter: e.target.value });
      setSearchParams({ id: movie.id })
    );
  };

  console.log('SearchedMovie', SearchedMovie);

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
