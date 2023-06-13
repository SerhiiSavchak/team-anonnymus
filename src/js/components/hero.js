//console.log('hello');
import axios from 'axios';
import Vimeo from '@vimeo/player';
import { selectMovie } from './modal';
import img from '../../images/home-page/hero-home@1x-desc.jpg';
const heroSection = document.querySelector('.hero');
const videoModal = document.querySelector('iframe');

let filmID = '';

// Fetch Fetch Fetch Fetch Fetch

async function fetchTrandingFilmDay() {
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
      },
    };

    const URL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

    let response = await axios.get(URL, options);
    const data = response;

    firstHeroMarkup(data);
  } catch (error) {
    onEror();
    console.log(error.message);
  }
}

function onEror() {
  document.querySelector('.hero-title').textContent =
    'Let’s Make Your Own Cinema';
  // heroWrap()
  document.querySelector(
    '.hero-text-big'
  ).textContent = `Is a guide to creating a personalized movie theater experience. You'll need a
projector, screen, and speakers. Decorate
your space, choose your films, and stock up on snacks for the full experience.`;

  document.querySelector(
    '.hero-text-mobile'
  ).textContent = `Is a guide to creating a personalized movie theater experience. You'll need a
projector, screen, and speakers.`;
  document.querySelector('.hero-rating').classList.add('visuality-hidden');
  document
    .querySelector('.hero-text-cont')
    .classList.remove('visuality-hidden');

  document.querySelector('.hero-black-btn').classList.add('visuality-hidden');
  document.querySelector('.hero-btn').classList.add('visuality-hidden');

  const errorBtn = `<a href="/catalog.html" class="hero-link">
                <button type="button" class="hero-start-btn">Get Started</button></a>`;

  document
    .querySelector('.hero-text-cont')
    .insertAdjacentHTML('beforeend', errorBtn);
  heroSection.style.backgroundImage = `linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url("${img}")`;
}

function onPageLoad() {
  //console.log('hello onPageLoad');
  fetchTrandingFilmDay()
    .then(data => {
      document
        .querySelector('.hero-text-cont')
        .classList.remove('visuality-hidden');
    })

    .catch(error => {
      console.log(error.message);
      onEror();
    });

  // setInterval(() => {
  //   fetchTrandingFilmDay();
  // }, 20000);
}

window.addEventListener('load', onPageLoad);

function heroRandomaizer() {
  return Math.floor(Math.random() * (19 - 0 + 1)) + 0;
}

function firstHeroMarkup(data) {
  const kaleidoscope = heroRandomaizer();
  const fetchInfo = data.data.results[kaleidoscope];

  // start staer
  document.querySelector('.rating_value').textContent = fetchInfo.vote_average;
  const ratingActiveWidth = fetchInfo.vote_average / 0.05 / 2;
  document.querySelector(
    '.rating_active'
  ).style.width = `${ratingActiveWidth}%`;
  // end staer

  document.querySelector(
    '.hero-title'
  ).textContent = `${fetchInfo.original_title}`;
  document.querySelector('.hero-text-big').textContent = `${fetchInfo.overview
    .split(' ')
    .slice(0, 50)
    .join(' ')}...`;

  document.querySelector(
    '.hero-text-mobile'
  ).textContent = `${fetchInfo.overview.split(' ').slice(0, 25).join(' ')}...`;

  heroSection.style.backgroundImage = `linear-gradient(
      86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(https://image.tmdb.org/t/p/original/${fetchInfo.backdrop_path})`;

  getFilmID(fetchInfo);
  // добавление дата-атрибута
  btnDetailsRef = document.querySelector('.hero-black-btn');
  btnDetailsRef.dataset.id = filmID;
  btnDetailsRef.addEventListener('click', selectMovie);
}

function heroWrap() {
  const box = `<div class="hero-text-cont ">
  <h2 class="hero-title"></h2>
        <!-- rating -->
        <div class="hero-rating">
            <div class="hero-rating_body">
                <div class="rating_active"></div>
            </div>
            <div class="rating_value"></div>
        </div>
        <!-- end rating -->
        <p class="hero-text-mobile"></p>
        <p class="hero-text-big"></p>
        <div class="hero-btn">
            <button type="button" class="btn" data-modal-open>Watch trailer</button>
            <button type="button" class="hero-black-btn">
                More details
            </button>
        </div>
        </div>`;
  heroSection.insertAdjacentHTML('afterbegin', box);
}

heroWrap();

// Modal// Modal// Modal

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function getFilmID(fetchInfo) {
  return (filmID = fetchInfo.id);
}

heroSection.addEventListener('click', watchFilm);

function watchFilm() {
  fetchFilmByID().catch(error => {
    console.log('on fetch error1');
    onModalError();
  });
}

async function fetchFilmByID() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
    },
  };

  const URL = `https://api.themoviedb.org/3/movie/${filmID}/videos?language=en-US,`;

  let response = await axios.get(URL, options);
  if (response.status !== 200) {
    console.log('on fetch error2');

    throw new Error(response);
  } else {
    const data = response;
    //console.log(data.data.results[0].key);
    addKey(data);
  }
}

function addKey(data) {
  const randomTrailer =
    Math.floor(Math.random() * (data.data.results.length - 0 + 1)) + 0;
  const curentKey = data.data.results[randomTrailer].key;
  videoModal.src = `https://www.youtube.com/embed/${curentKey}`;
}

function onModalError() {
  //  .modal
  videoModal.classList.add('visuality-hidden');
  document
    .querySelector('.hero-modal-error')
    .classList.remove('visuality-hidden');
}
