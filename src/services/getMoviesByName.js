import axios from 'axios';

export default class SearchMovies {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWQ2MWE4YjQ2NmU1YmQxMTMyMTgyMzhjNGY0ZjlmMyIsInN1YiI6IjY0YTI2YTQzODI4OWEwMDBjYWYwYTVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhvEKG7EoG9x1nhRPq5CaXnidc__HxCqBk3ol-ubvBY',
    },
  };

  async getMovies(searchWord) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchWord}&include_adult=false&language=en-US&page=1`,
        this.options
      );

      const results = response.data.results;

      if (results.length === 0) {
        throw new Error();
      }

      return { results };
    } catch (error) {
      throw new Error(`No popular films`);
    }
  }
}
