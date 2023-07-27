import { renderMarkup, addMarkup } from '../markup/weeklyMarkup';
import { getGenres } from '../api/fetchGenres';
import { getTrendingMovie } from '../api/fetchTrandingWeek';
import { selectMovie } from '../components/modal';
import { weeklyUlRef } from '../refs/weeklyRefs';
export async function fetchMovieDetails() {
  try {
    const responseMovie = await getTrendingMovie();
    const movie = responseMovie.data.results.slice(0, 3);

    const responseGenre = await getGenres();

    const genreData = responseGenre.data.genres;

    const markup = renderMarkup(movie, genreData);
    addMarkup(weeklyUlRef, markup);
    weeklyUlRef.addEventListener('click', selectMovie);
  } catch (error) {
    console.log(error.message);
  }
}
