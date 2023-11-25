import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import fetchMovies from '../components/FetchAPIs/fetchMovies';
import SearchForm from '../components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MovieList.1';
import Loader from '../components/Loader/Loader';

import { toast } from 'react-toastify';

import 'toastify-js/src/toastify.css';
import '../components/movies.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [SearchedMovie, setSearchedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  const handleInputValue = e => {
    setSearchQuery(e.target.value);
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
  };

  useEffect(() => {
    if (movieName === null) {
      return;
    }

    setIsLoading(true);

    fetchMovies(movieName)
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
      })
      .finally(setIsLoading(false));
  }, [movieName]);

  const getMovieId = () => {
    if (!SearchedMovie) {
      return;
    }

    SearchedMovie.map(movie => setSearchParams({ id: movie.id }));
  };

  return (
    <>
      <SearchForm
        handleFormSubmit={handleFormSubmit}
        handleInputValue={handleInputValue}
      />
      {isLoading && <Loader />}
      {SearchedMovie &&
        SearchedMovie.map(movie => {
          return (
            <MovieList getMovieId={getMovieId} movie={movie} key={movie.id} />
          );
        })}
    </>
  );
};

export default Movies;
