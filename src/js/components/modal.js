import { createModalMarkup } from '../markup/modalMarkup.js';

export function selectMovie(event) {
  if (event.target.nodeName !== 'LI' && event.target.nodeName !== 'BUTTON') {
    return;
  }

  const movieID = event.target.dataset.id;
  createModalMarkup(movieID);
}
