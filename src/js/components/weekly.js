import { fetchData } from '../api/fetchWeekly';
import { fetchGenres } from '../api/fetchWeekly';
import { weeklyUlRef } from '../refs/weeklyRefs';
import { options } from '../api/apiKey';

import { renderMarkup, addMarkup } from '../markup/weeklyMarkup';

const END_POINT = 'trending/all/week?language=en-US';

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
