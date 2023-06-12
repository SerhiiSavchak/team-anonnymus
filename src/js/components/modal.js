import axios from 'axios';
import { API_KEY, BASE_URL } from '../api/apiKey.js';

//const movieID = 385687; // для тестов
// эту константу не мешало бы добавить в apiKey.js
const URL_FOR_IMG = 'https://image.tmdb.org/t/p/w500';
const textButton = 'Add to my library'; // имя кнопки будет меняться
const backdropRef = document.querySelector('.backdrop');
const modalWindowRef = document.querySelector('.js-modal-window');
const weeklyUlRef = document.querySelector('.weekly-list');

weeklyUlRef.addEventListener('click', selectMovie);

function selectMovie(event) {
  if (event.target.nodeName !== 'LI') {
    return;
  }

  const movieID = event.target.dataset.id;
  createModalMarkup(movieID);
}

async function createModalMarkup(movieID) {
  modalWindowRef.innerHTML = '';
  try {
    const response = await getInfoMovieByID(movieID);
    const movieInfo = response.data;
    toggleModal();
    // приведем полученные данные к нужному виду
    const movieInfoForMarkup = {
      poster: `${URL_FOR_IMG}${movieInfo.poster_path}`,
      title: movieInfo.title,
      vote_average: movieInfo.vote_average.toFixed(1),
      vote_count: movieInfo.vote_count,
      popularity: movieInfo.popularity.toFixed(1),
      genres: movieInfo.genres.map(({ name }) => name).join(' '),
      overview: movieInfo.overview,
      textButton,
    };

    modalWindowRef.innerHTML = getModalMarkup(movieInfoForMarkup);
    const closeModalBtn = document.querySelector('.modal-close-btn');

    // кнопка закрытия окна
    closeModalBtn.addEventListener('click', toggleModal);
  } catch (error) {
    console.log(error);
  }
}

// убрать в отдельный модуль
function getInfoMovieByID(movieID) {
  return axios.get(`${BASE_URL}movie/${movieID}`, {
    params: {
      api_key: API_KEY,
    },
  });
}

function getModalMarkup({
  poster,
  title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
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

      <button class="modal-button" type="button">${textButton}</button>
    </div>
      `;
}

function toggleModal() {
  backdropRef.classList.toggle('visuality-hidden');
}
