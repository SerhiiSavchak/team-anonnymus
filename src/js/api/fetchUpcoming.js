import axios from 'axios';
import { getGenres } from '../api/fetchGenres.js';
import { BASE_URL, API_KEY } from './apiKey';
import { upcomingList } from '../refs/upcomingRefs.js';
import { onAddRemoveMovie } from '../components/modalLocalStorage.js';
import { createMarkup } from '../markup/upcomingMarkup.js';
export function fetchUpcoming() {
  return axios.get(`${BASE_URL}movie/upcoming`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
}

export async function fetchMovieDetails() {
  try {
    const responseMovie = await fetchUpcoming();
    const movie =
      responseMovie.data.results[
        Math.floor(Math.random() * responseMovie.data.results.length)
      ];

    const responseGenre = await getGenres();
    const genreData = responseGenre.data.genres;

    const genres = movie.genre_ids
      .map(id => genreData.find(genre => genre.id === id).name)
      .slice(0, 2)
      .join(', ');
    movie.genres = genres;
    upcomingList.insertAdjacentHTML('beforeend', createMarkup(movie));

    const addRemoveBtnRef = document.querySelector('.js-add-remove-library');

    addRemoveBtnRef.addEventListener('click', onAddRemoveMovie);
  } catch (error) {
    console.log(error.message);
  }
}
