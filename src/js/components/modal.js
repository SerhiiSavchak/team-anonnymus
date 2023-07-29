import { createModalMarkup } from '../markup/modalMarkup.js';
import { toggleModal } from '../utils/modalUtils.js';
import { closeModalBtn } from '../refs/modalRefs.js';

// кнопка закрытия окна

closeModalBtn.addEventListener('click', toggleModal);

export function selectMovie(event) {
  if (
    event.target.nodeName !== 'LI' &&
    event.target.nodeName !== 'H2' &&
    event.target.nodeName !== 'P' &&
    event.target.nodeName !== 'SPAN' &&
    event.target.nodeName !== 'BUTTON'
  ) {
    return;
  }

  const movieID = event.target.dataset.id;

  createModalMarkup(movieID);
}
