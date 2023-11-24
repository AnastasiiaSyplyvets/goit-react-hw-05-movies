import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Fetchcast from '../FetchAPIs/FetchCast';

import css from '../../components/styles/cast.module.css';

function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  const baseApiUrl = 'https://image.tmdb.org/t/p/w500';

  const apiKey = 'a42bf4f31f7d8fb3cfc076b340ef7462';

  useEffect(() => {
    Fetchcast(movieId)
      .then(function (response) {
        setActors(response.data.cast);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [movieId]);

  return (
    <>
      {actors.map(actor => (
        <ul key={actor.id}>
          <li key={actor.id}>
            <img
              className={css.actorImg}
              src={`${baseApiUrl}${actor.profile_path}?api_key=${apiKey}`}
              alt={actor.name}
            />
            <p className={css.actorText}>{actor.name}</p>
            <p className={css.actorText}>Character: {actor.character}</p>
          </li>
        </ul>
      ))}
    </>
  );
}
export default Cast;