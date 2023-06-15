import { getTrendingMovie } from '../api/fetchTranding';
import { getGenres } from '../api/fetchGenres';
import { transformData } from '../utils/weeklyUtils';
import { selectMovie } from './modal';
import { renderMarkup, addMarkup } from '../markup/weeklyMarkup';

const weeklyWrap = document.querySelector('.weekly-list');
// WORKSPACE

window.addEventListener('load', onPageLoad);

// LISTENERS
function onPageLoad() {
  fetchMovieDetails();
}

async function fetchMovieDetails() {
  try {
    const responseMovie = await getTrendingMovie();
    const movie = responseMovie.data.results.slice(0, 3);

    const responseGenre = await getGenres();

    const genreData = responseGenre.data.genres;

    const markup = renderMarkup(movie, genreData);
    addMarkup(weeklyWrap, markup);
    weeklyWrap.addEventListener('click', selectMovie);
  } catch (error) {}
}
