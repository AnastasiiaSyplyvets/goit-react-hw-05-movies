import { Link, useLocation } from 'react-router-dom';

import css from '../styles/movies.module.css';

import PropTypes from 'prop-types';

export const MovieList = ({ movie, onClickFunction }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      <li>
        <Link
          className={css.movieListLink}
          state={{ from: location }}
          onClick={onClickFunction}
          to={`/movies/${movie.id}`}
        >
          {movie.title}
        </Link>
      </li>
    </ul>
  );
};

MovieList.propTypes = {
  movie: PropTypes.object,
  onClickFunction: PropTypes.func,
};
