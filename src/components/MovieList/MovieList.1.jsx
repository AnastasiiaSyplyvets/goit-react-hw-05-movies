import { Link, useLocation } from 'react-router-dom';
import css from '../styles/movies.module.css';

export const MovieList = ({ movie, onClickFunction }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      <li>
        <span>
          <svg class="icon" width="20px" height="20px">
            <use href="../styles/symbol-defs.svg#icon-play" />
          </svg>
        </span>
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
