import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [SearchedMovie, setSearchedMovie] = useState(null);

  const handleInputValue = e => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
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
        console.log(data);
        setSearchedMovie(data.results);
        return data;
      })
      .catch(err => console.log(err));
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    fetchRequest();
  };

  console.log(SearchedMovie);
  return (
    <>
      <div>Movies</div>
      <form onSubmit={handleFormSubmit}>
        <input id="input" onChange={handleInputValue}></input>
        <button>Search</button>
      </form>

      {SearchedMovie &&
        SearchedMovie.map(movie => {
          return (
            <ul>
              <li key={movie.id}>
                <Link to="/movies/:movieId">{movie.title}</Link>
              </li>
            </ul>
          );
        })}
    </>
  );
};

export default Movies;
