import React, { useState, useEffect, useCallback, useMemo } from 'react';

import SearchMovies from 'services/getMoviesByName';
import Error from 'components/Error/Error';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import {
  MoviesContainer,
  MovieCard,
  Form,
  Input,
  Button,
  MoviePoster,
  PlaceholderImage,
  MovieTitle,
} from './Movies.Styled';

const Movies = () => {
  const apiService = useMemo(() => new SearchMovies(), []);
  const location = useLocation();

  const [movies, setMovies] = useState([]);

  const [isError, setIsError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [searchInput, setSearchInput] = useState(movieName);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  const fetchMovies = useCallback(async () => {
    setIsError(false);
    try {
      const response = await apiService.getMovies(searchInput);
      setMovies(response.results);
    } catch (error) {
      setIsError(error);
    } finally {
    }
  }, [apiService, searchInput, setMovies]);

  useEffect(() => {
    if (!searchInput) {
      return;
    }
  });
  useEffect(() => {
    if (!movieName) {
      return;
    }
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieName]);
  const handleSearch = event => {
    event.preventDefault();
    updateQueryString(searchInput);
  };
  const handleInputChange = event => {
    setSearchInput(event.target.value);
  };
  return (
    <div>
      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Search movies"
        />

        <Button type="submit">Search</Button>
      </Form>

      {!isError ? (
        <MoviesContainer>
          {movies.map(film => (
            <MovieCard key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.poster_path ? (
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.title ? film.title : film.name}
                  />
                ) : (
                  <PlaceholderImage
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt={film.name}
                  />
                )}

                <MovieTitle>{film.title ? film.title : film.name}</MovieTitle>
              </Link>
            </MovieCard>
          ))}
        </MoviesContainer>
      ) : (
        <Error>We don't have any movies with this name</Error>
      )}
    </div>
  );
};
export default Movies;
