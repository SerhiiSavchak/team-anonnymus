import { createModalMarkup } from '../markup/modalMarkup.js';
import { toggleModal } from '../utils/modalUtils.js';

const closeModalBtn = document.querySelector('.modal-close-btn');

// кнопка закрытия окна
closeModalBtn.addEventListener('click', toggleModal);

export function selectMovie(event) {
  if (event.target.nodeName !== 'LI' && event.target.nodeName !== 'BUTTON') {
    return;
  }

  const movieID = event.target.dataset.id;
  createModalMarkup(movieID);
}
