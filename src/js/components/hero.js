import axios from 'axios';

let filmID = '';

// REFS

const heroSection = document.querySelector('.hero');
const videoModal = document.querySelector('iframe');
const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

window.addEventListener('load', onPageLoad);

heroSection.addEventListener('click', watchFilm);

// FETCH

async function fetchTrandingFilmDay() {
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
  if (response.status !== 200) {
    throw new Error(response);
  } else {
    const data = response;

    firstHeroMarkup(data);
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

  const ereoBtn = `<a href="./src/catalog.html" class="hero-link">
                <button type="button" class="hero-start-btn">Get Started</button></a>`;

  heroSection.insertAdjacentHTML('beforeend', ereoBtn);
  heroSection.style.backgroundImage =
    'linear-gradient(86.77deg,#111111 30.38%,rgba(17, 17, 17, 0) 65.61%),url(..srcimageshome-pagehero-home1x-mobile.jpg)';
}

// LISTENER

function onPageLoad() {
  heroWrap();
  console.log('hello onPageLoad');
  fetchTrandingFilmDay()
    .then(data => {
      document
        .querySelector('.hero-text-cont')
        .classList.remove('visuality-hidden');
    })
    .catch(error => {
      onEror();
    });

  setInterval(() => {
    fetchTrandingFilmDay();
  }, 20000);
}

// UTILS

function heroRandomaizer() {
  return Math.floor(Math.random() * (19 - 0 + 1)) + 0;
}

// MARKUP
function firstHeroMarkup(data) {
  heroRandomaizer();
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
}

function heroWrap() {
  const box = `<div class="hero-text-cont сontainer visuality-hidden">
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

// MODAL

// REFS

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function getFilmID(fetchInfo) {
  return (filmID = fetchInfo.id);
}

function watchFilm() {
  fetchFilmByID().catch(function (error) {
    console.log('Ereor wathtrailer');
    onModalError();
  });
}

// FETCH MODAL

async function fetchFilmByID() {
  filmID;

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
    throw new Error(response);
  } else {
    const data = response;
    console.log(data.data.results[0].key);
    addKey(data);
  }
}

function addKey(data) {
  const curentKey = data.data.results[0].key;
  console.log(data.data);
  videoModal.src = `https://www.youtube.com/embed/${curentKey}`;
}

function onModalError() {
  //  .modal
  videoModal.classList.add('visuality-hidden');
  const errorText = `<p>OOPS...
    We are very sorry!
    But we couldn’t find the trailer.</p>
<picture>
    <source srcset="
                            src\images\error\error-@1x-mobile.png 1x, 
                            src\images\error\error-@2x-mobile.png 2x" media="(max-width: 768px)">
    <source srcset="
                            src\images\error\error-@1x-tablet.png 1x, 
                            src\images\error\error-@2x-tablet.png 2x" media="(min-width: 768px)">
    <source srcset="
                            src\images\error\error-@1x-desctop.png 1x, 
                            src\images\error\error-@2x-desctop.png 2x" media="(min-width: 1200px)">
    <img class="hero-error-img" src="src\images\error\error-@1x-mobile.png " alt="Error" width="200">
</picture>`;

  refs.modal.insertAdjacentHTML('afterbegin', errorText);
}
