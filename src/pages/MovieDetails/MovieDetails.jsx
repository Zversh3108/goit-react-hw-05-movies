import React, { useEffect, useState, Suspense } from 'react';
import getMovieInfo from 'services/getMovieInfo';
import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import {
  MovieDescription,
  MovieDetailsContainer,
  MovieImage,
  MovieTitle,
  BackButton,
  PlaceholderImage,
  MovieScore,
  MovieOverview,
  AdditionalInfoContainer,
  AdditionalInfoTitle,
  AdditionalInfoList,
  AdditionalInfoLink,
  MovieContent,
} from './MovieDetails.Styled';

const MovieDetails = () => {
  const apiService = new getMovieInfo();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isError, setIsError] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const prevState = location.state;
  const prevPageLocation = prevState?.from;

  async function fetchDetails() {
    setShowButton(false);
    setIsError(false);
    try {
      const response = await apiService.getMovieDetails(movieId);
      setMovieInfo(response.results);
    } catch (error) {
      setIsError(error);
    } finally {
      setShowButton(true);
    }
  }

  useEffect(() => {
    if (!movieInfo) {
      fetchDetails();
    }
  }, [movieInfo, movieId]);

  if (isError) {
    return <Error>We don't have details about this movie</Error>;
  }

  return (
    <MovieDetailsContainer>
      {showButton && <BackButton to={prevPageLocation}>Go Back</BackButton>}

      {movieInfo && (
        <MovieContent>
          {movieInfo.poster_path ? (
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
              alt={movieInfo.title ? movieInfo.title : movieInfo.name}
            />
          ) : (
            <PlaceholderImage
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt={movieInfo.name}
            />
          )}
          <div>
            <MovieTitle>{movieInfo.title}</MovieTitle>
            <MovieScore>
              User score: {Math.round(movieInfo.vote_average * 10)} %
            </MovieScore>
            <MovieOverview>Overview</MovieOverview>
            <MovieDescription>{movieInfo.overview}</MovieDescription>
            {movieInfo.genres && (
              <>
                <MovieOverview>Genres</MovieOverview>
                <MovieDescription>
                  {movieInfo.genres.map(genre => genre.name).join(', ')}
                </MovieDescription>
              </>
            )}
          </div>
        </MovieContent>
      )}

      {movieInfo && (
        <AdditionalInfoContainer>
          <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
          <AdditionalInfoList>
            <li>
              <AdditionalInfoLink
                to={`/movies/${movieId}/cast`}
                state={{ from: prevPageLocation }}
              >
                Cast
              </AdditionalInfoLink>
            </li>
            <li>
              <AdditionalInfoLink
                to={`/movies/${movieId}/reviews`}
                state={{ from: prevPageLocation }}
              >
                Reviews
              </AdditionalInfoLink>
            </li>
          </AdditionalInfoList>
        </AdditionalInfoContainer>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
