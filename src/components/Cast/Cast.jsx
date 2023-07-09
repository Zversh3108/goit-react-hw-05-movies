import React, { useEffect, useState } from 'react';
import getCastInfo from 'services/getCastInfo';
import { useParams } from 'react-router-dom';
export function Cast() {
  const { movieId } = useParams();
  const apiService = new getCastInfo();
  const [castInfo, setCastInfo] = useState(null);

  async function fetchCast() {
    try {
      const response = await apiService.getCast(movieId);
      setCastInfo(response.results.cast);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <div>
      {castInfo ? (
        <ul>
          {castInfo.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character} </p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
