import { toggleModal } from '../utils/modalUtils.js';
import { getInfoMovieByID } from '../api/fetchModal.js';
import { URL_FOR_IMG } from '../api/apiKey.js';
import { modalWindowRef } from '../refs/modalRefs.js';
import {
  onAddRemoveMovie,
  IsMovieInLibrary,
} from '../components/modalLocalStorage.js';

let textButton = '';

async function createModalMarkup(movieID) {
  modalWindowRef.innerHTML = '';

  try {
    const response = await getInfoMovieByID(movieID);

    const movieInfo = response.data;

    // переключение видимости
    toggleModal();

    if (IsMovieInLibrary(movieID)) {
      textButton = 'Remove from my library';
    } else {
      textButton = 'Add to my library';
    }

    // приведем полученные данные к нужному виду
    const movieInfoForMarkup = {
      poster: `${URL_FOR_IMG}${movieInfo.poster_path}`,
      title: movieInfo.title,
      vote_average: movieInfo.vote_average.toFixed(1),
      vote_count: movieInfo.vote_count,
      popularity: movieInfo.popularity.toFixed(1),
      genres: movieInfo.genres
        .slice(0, 2)
        .map(({ name }) => name)
        .join(' '),
      overview: movieInfo.overview,
      id: movieID,
      textButton,
    };

    modalWindowRef.innerHTML = getModalMarkup(movieInfoForMarkup);

    // кнопка добавления удаления фильма
    const addRemoveBtnRef = document.querySelector('.modal-button');
    addRemoveBtnRef.addEventListener('click', onAddRemoveMovie);
  } catch (error) {
    console.log(error);
  }
}

function getModalMarkup({
  poster,
  title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  id,
  textButton,
}) {
  return `
      <img class="modal-img-poster" src="${poster}" alt="poster" />
      <div class="modal-all-information-about-film">
        <h2 class="modal-title">${title}</h2>
  
        <div class="modal-stat-film">
          <ul class="modal-stat-param list">
            <li><p>Vote / Votes</p></li>
            <li><p>Popularity</p></li>
            <li><p>Genre</p></li>
          </ul>
          <ul class="modal-stat-values list">
            <li class="modal-stat-values-item">
              <p class="modal-stat-values-text">
                <span class="modal-vote">${vote_average}</span> /
                <span class="modal-votes">${vote_count}</span>
              </p>
            </li>
            <li class="modal-stat-values-item">
              <p class="modal-stat-values-text">${popularity}</p>
            </li>
            <li class="modal-stat-values-item">
              <p class="modal-stat-values-text">${genres}</p>
            </li>
          </ul>
        </div>
        <p class="modal-about">About</p>
        <p class="modal-about-text">
          ${overview}
        </p>
  
        <button class="modal-button" type="button" data-id="${id}">${textButton}</button>
      </div>
        `;
}

export { createModalMarkup, getModalMarkup };
