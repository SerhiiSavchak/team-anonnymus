import { fetchMovieDetails } from '../api/fetchUpcoming.js';

window.addEventListener('load', onPageLoad);

function onPageLoad() {
  fetchMovieDetails();
}
