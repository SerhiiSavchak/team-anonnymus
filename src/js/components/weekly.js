import { fetchData } from '../api/fetchWeekly';
import { fetchGenres } from '../api/fetchWeekly';
import { weeklyUlRef } from '../refs/weeklyRefs';

import { renderMarkup, addMarkup } from '../markup/weeklyMarkup';

const END_POINT = 'trending/all/week?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
  },
};

// WORKSPACE

window.addEventListener('load', onPageLoad);

// LISTENERS
function onPageLoad() {
  const genrePromise = fetchGenres(options);

  fetchData(END_POINT, options).then(movieData => {
    console.log(movieData);

    genrePromise.then(genreData => {
      const markup = renderMarkup(movieData, genreData);
      addMarkup(weeklyUlRef, markup);
    });
  });
}
