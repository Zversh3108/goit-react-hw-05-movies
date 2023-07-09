import React, { useEffect, useState } from 'react';
import getMovieInfo from 'services/getMovieInfo';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const apiService = new getMovieInfo();
  const [movieInfo, setMovieInfo] = useState(null);

  async function fetchMovies() {
    try {
      const response = await apiService.getMovies(movieId);
      setMovieInfo(response.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  const goBackHandle = () => {
    navigate(-1);
  };
  return (
    <div>
      {' '}
      <button onClick={goBackHandle}>Go Back</button>
      {movieInfo ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.title}
          />

          <div>
            <h2>{movieInfo.title}</h2>
            <p>User score: {movieInfo.popularity}</p>
            <h3>Overview</h3>
            <p>{movieInfo.overview}</p>
            <h3>Genres</h3>
            <p>{movieInfo.genres.map(genre => genre.name).join(', ')}</p>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast `}>Cast</Link>
              </li>{' '}
              <li>
                <Link to={`/movies/${movieId}/reviews `}>Reviews</Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
      <Outlet />
    </div>
  );
}
