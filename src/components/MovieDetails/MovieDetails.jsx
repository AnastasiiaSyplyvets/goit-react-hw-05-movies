import React from 'react';
import { useState, useEffect, Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import fetchMovieDetails from '../FetchAPIs/FetchMovieDetails';

import css from '../../components/styles/movieDetails.module.css';

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? './movies');

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const { movieId } = useParams();

  const baseUrl = 'https://image.tmdb.org/t/p/w200';
  const movieUrl = movie.poster_path;
  const ApiKey = 'a42bf4f31f7d8fb3cfc076b340ef7462';

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(function (response) {
        setMovie(response.data);
        setGenres(response.data.genres);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [movieId]);

  const yearCount = () => {
    if (!movie.release_date) {
      return;
    }
    return movie.release_date.slice(0, 4);
  };
  console.log(movie);
  return (
    <div className={css.movieContainer}>
      <Link to={backLinkRef.current ?? '/'}>Go back</Link>

      <div className={css.description}>
        <img
          src={
            movieUrl ? `${baseUrl}${movieUrl}?api_key=${ApiKey}` : defaultImg
          }
          height={300}
          alt="poster film"
          className={css.posterImg}
        />

        <div>
          <h2>
            {movie.title} ({yearCount()})
          </h2>
          <p>User score: {movie.vote_average}%</p>
          <h3>Overwiew</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <div className={css.genres}>
            {genres.map(item => (
              <ul className={css.genre} key={item.id}>
                <li className={css.list}>{item.name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className={css.info}>
        <h4 className={css.infoTitle}>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>CAST</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
