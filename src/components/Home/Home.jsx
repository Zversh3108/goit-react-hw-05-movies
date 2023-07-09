import React, { useEffect, useState } from 'react';
import PopularFilmsAPI from 'services/getPopularMovies';
import { Link } from 'react-router-dom';

const apiService = new PopularFilmsAPI();

export function Home() {
  const [popularFilms, setPopularFilms] = useState([]);

  async function fetchData() {
    try {
      const response = await apiService.getPopularMovies();
      setPopularFilms(response.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      <ul>
        {popularFilms.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>
              {film.title ? film.title : film.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
