import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  console.log(movieId);

  const baseApiUrl = 'https://image.tmdb.org/t/p/w500';

  const apiKey = 'a42bf4f31f7d8fb3cfc076b340ef7462';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a42bf4f31f7d8fb3cfc076b340ef7462`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setActors(data.cast);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  console.log(actors);
  return (
    <>
      {actors.map(actor => (
        <ul key={actor.id}>
          <li key={actor.id}>
            <img
              src={`${baseApiUrl}${actor.profile_path}?api_key=${apiKey}`}
              alt={actor.name}
            />
            <p>Name: {actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        </ul>
      ))}

      <p>CAST</p>
    </>
  );
}
export default Cast;
