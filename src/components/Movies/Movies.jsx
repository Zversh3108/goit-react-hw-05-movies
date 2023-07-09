import React, { useState } from 'react';
import SearchMovies from 'services/getMoviesByName';
import { Link } from 'react-router-dom';
export function Movies(props) {
  const apiService = new SearchMovies();
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  async function fetchMovies() {
    try {
      const response = await apiService.getMovies(searchInput);
      setMovies(response.results);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearch = event => {
    event.preventDefault();
    fetchMovies();
    setSearchInput('');
  };
  const handleWordChange = evt => {
    setSearchInput(evt.currentTarget.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={handleWordChange}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(film => (
          <li>
            <Link to={`/movies/${film.id}`}>
              {film.title ? film.title : film.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
