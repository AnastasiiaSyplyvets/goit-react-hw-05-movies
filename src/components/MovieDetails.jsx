import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();

  console.log(movieId);

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const movieUrl = movie.backdrop_path;
  const ApiKey = 'a42bf4f31f7d8fb3cfc076b340ef7462';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a42bf4f31f7d8fb3cfc076b340ef7462`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovie(data);
        setGenres(data.genres);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  console.log(genres);
  return (
    // { movie &&
    <div>
      <h2>{movie.title}</h2>
      <img src={`${baseUrl}${movieUrl}?api_key=${ApiKey}`} alt="movie poster" />
      <p>User score: {movie.vote_count}</p>
      <h3>Overwiew</h3>
      <p>{movie.overview}</p>
      <h4>Genres</h4>

      {genres.map(item => (
        <ul key={item.id}>
          <li>{item.name}</li>
        </ul>
      ))}

      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>CAST</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
