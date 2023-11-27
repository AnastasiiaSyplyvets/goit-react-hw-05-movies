import { Link, useLocation } from 'react-router-dom';

import css from '../styles/movies.module.css';

import PropTypes from 'prop-types';

export const MovieList = ({ movies, onClickFunction }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map(movie => {
        return (
          <li className={css.subTitle} key={movie.id}>
            <Link
              className={css.movieListLink}
              state={{ from: location }}
              onClick={onClickFunction}
              to={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
  onClickFunction: PropTypes.func,
};
