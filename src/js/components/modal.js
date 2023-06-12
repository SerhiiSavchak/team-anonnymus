import { weeklyUlRef } from '../refs/modalRefs.js';

import { createModalMarkup } from '../markup/modalMarkup.js';

weeklyUlRef.addEventListener('click', selectMovie);

function selectMovie(event) {
  if (event.target.nodeName !== 'LI') {
    return;
  }

  const movieID = event.target.dataset.id;
  createModalMarkup(movieID);
}
