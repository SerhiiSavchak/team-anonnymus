import { fetchMovieDetails } from '../api/fetchWeekly';

window.addEventListener('load', onPageLoad);

function onPageLoad() {
  fetchMovieDetails();
}
