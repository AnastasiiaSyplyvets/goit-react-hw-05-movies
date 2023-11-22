import React from 'react';
// import { useRef } from 'react';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import css from '../../components/styles/movieDetails.module.css';

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  // const backLinkRef = useRef(location.state?.from ?? './movies');

  const { movieId } = useParams();

  const baseUrl = 'https://image.tmdb.org/t/p/w200';
  const movieUrl = movie.poster_path;
  const ApiKey = 'a42bf4f31f7d8fb3cfc076b340ef7462';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a42bf4f31f7d8fb3cfc076b340ef7462`
    )
      .then(res => res.json())
      .then(data => {
        setMovie(data);
        console.log(data);

        setGenres(data.genres);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  const yearCount = () => {
    if (!movie.release_date) {
      return;
    }
    return movie.release_date.slice(0, 4);
  };
  console.log('location moviedetails', location);
  return (
    <div className={css.movieContainer}>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      {/* <Link to={backLinkRef.current}>Go back</Link> */}
      <div className={css.description}>
        <img
          className={css.posterImg}
          src={`${baseUrl}${movieUrl}?api_key=${ApiKey}`}
          alt="movie poster"
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
