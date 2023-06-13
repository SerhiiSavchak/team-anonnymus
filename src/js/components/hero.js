//console.log('hello');
import axios from 'axios';
import Vimeo from '@vimeo/player';
import { selectMovie } from './modal';
import img from '../../images/home-page/hero-home@1x-desc.jpg';
import { async } from '@vimeo/player';

import { BASE_URL } from '../api/apiKey';
const END_POINT = 'trending/movie/day?language=en-US';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
  },
};

const heroSection = document.querySelector('.hero-section');
const heroCont = document.querySelector('.hero-container');
const btnClose = document.querySelector('.hero-modal-close');
const backdropModal = document.querySelector('.hero-backdrop');
window.addEventListener('load', onPageLoad);

btnClose.addEventListener('click', onBtnCloseClick);

function onBtnCloseClick(evt) {
  backdropModal.classList.remove('.visuality-hidden');
}

function onPageLoad() {
  fetchTranding(BASE_URL, END_POINT, options).then(res => {
    const markup = createMarkup(res);
    addMarkup(markup);
  });
}

async function fetchTranding(BASE_URL, END_POINT, options) {
  const response = await fetch(`${BASE_URL}${END_POINT}`, options);
  const data = await response.json();

  return data.results[Math.floor(Math.random() * (20 - 1 + 1)) + 1];
}

function createMarkup(data) {
  heroSection.style.backgroundImage = `linear-gradient(
    86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url("https://image.tmdb.org/t/p/original/${data.backdrop_path}")`;

  return `  <h1 class="hero-title-resp">${data.title}</h1>
  <p class="hero-text-resp">
  ${data.overview.split('').slice(0, 150).join('') + '...'}
</p>
  <p class="hero-text-big-resp">
    ${data.overview.split('').slice(0, 225).join('') + '...'}
  </p>
  <a href="" class="hero-btn-resp btn link">Watch trailer</a><a href="" class="hero-btn-black  link" data-id="${
    data.id
  }">More details</a>`;
}

function addMarkup(markup) {
  heroCont.innerHTML = markup;
}
