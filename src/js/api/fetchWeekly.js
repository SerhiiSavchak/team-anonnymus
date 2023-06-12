//FETCH
import { BASE_URL } from './apiKey';

async function fetchData(END_POINT, options) {
  try {
    const response = await fetch(`${BASE_URL}${END_POINT}`, options);
    const data = await response.json();
    return data.results.slice(0, 3);
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchGenres(options) {
  try {
    const response = await fetch(
      `${BASE_URL}genre/movie/list?language=en`,
      options
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.log(error.message);
  }
}

export { fetchData };
export { fetchGenres };
