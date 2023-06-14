import { createModalMarkup } from '../markup/modalMarkup.js';
import { toggleModal } from '../utils/modalUtils.js';

const closeModalBtn = document.querySelector('.modal-close-btn');

// кнопка закрытия окна

closeModalBtn.addEventListener('click', toggleModal);

export function selectMovie(event) {
  console.log(event.target.nodeName);

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
  console.log(movieID);
  createModalMarkup(movieID);
}
