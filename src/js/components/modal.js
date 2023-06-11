import axios from 'axios';
import { API_KEY, BASE_URL } from '../api/apiKey.js';

const modalEl = document.querySelector('.modal-window');
const movieID = 385687;
const URL_FOR_IMG = 'https://image.tmdb.org/t/p/w500';
const textButton = 'Add to my library';
const backdropEl = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.modal-close-btn');

createModalMarkup(movieID);

async function createModalMarkup(movieID) {
  try {
    const response = await getInfoMovieByID(movieID);
    const movieInfo = response.data;
    console.log(movieInfo);
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

    const markup = getModalMarkup(movieInfoForMarkup);
    modalEl.insertAdjacentHTML('beforeend', markup);
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
      `;
}

// кнопка закрытия окна
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  backdropEl.classList.toggle('visuality-hidden');
}
