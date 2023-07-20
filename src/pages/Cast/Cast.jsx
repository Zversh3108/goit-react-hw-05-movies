import React, { useEffect, useState, useCallback, useMemo } from 'react';
import getCastInfo from 'services/getCastInfo';
import { useParams } from 'react-router-dom';
import Error from 'components/Error/Error';

import {
  CastContainer,
  ActorCard,
  PlaceholderImage,
  ActorName,
  CharacterName,
  ActorImage,
} from './Cast.Styled';

const Cast = () => {
  const { movieId } = useParams();
  const apiService = useMemo(() => new getCastInfo(), []);
  const [castInfo, setCastInfo] = useState([]);
  const [isError, setIsError] = useState(null);

  const fetchCast = useCallback(async () => {
    try {
      const response = await apiService.getCast(movieId);
      setCastInfo(response.results.cast);
    } catch (error) {
      setIsError(error);
    }
  }, [apiService, movieId, setCastInfo]);

  useEffect(() => {
    if (!castInfo.length > 0) {
      fetchCast();
    }
  }, [fetchCast, castInfo]);
  return (
    <CastContainer>
      {!isError ? (
        castInfo.map(actor => (
          <ActorCard key={actor.id}>
            {actor.profile_path ? (
              <ActorImage
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <PlaceholderImage
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt={actor.name}
              />
            )}
            <ActorName>{actor.name}</ActorName>
            <CharacterName>Character: {actor.character} </CharacterName>
          </ActorCard>
        ))
      ) : (
        <Error>We don't have cast info of this movie</Error>
      )}
    </CastContainer>
  );
};
export default Cast;
