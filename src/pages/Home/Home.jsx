import React, { useEffect, useState } from 'react';
import PopularFilmsAPI from 'services/getPopularMovies';
import { Link, useLocation } from 'react-router-dom';
import { HomeContainer } from './Home.Styled';

const apiService = new PopularFilmsAPI();

const Home = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const location = useLocation();
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
    <HomeContainer>
      <h1>Tranding today</h1>

      <ul>
        {popularFilms.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title ? film.title : film.name}
            </Link>
          </li>
        ))}
      </ul>
    </HomeContainer>
  );
};
export default Home;
