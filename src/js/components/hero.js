console.log('hello');
import axios from 'axios';

const heroSection = document.querySelector('.hero');


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
  heroSection.style.backgroundImage = `linear-gradient(
      86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url("../images/home-page/hero-home@1x-tablet.jpg")`;
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

  document.querySelector('.hero-blackBtn').classList.add('visuality-hidden');
  document.querySelector('.hero-btn').classList.add('visuality-hidden');

  const ereoBtn = `<a href="./src/catalog.html" class="hero-link">
                <button type="button" class="hero-startbtn">Get Started</button></a>`;
  
  
  
  heroSection.insertAdjacentHTML('beforeend', ereoBtn);
}

function onPageLoad() {
  console.log('hello onPageLoad');
  fetchTrandingFilmDay().then(data => {
    
    document
      .querySelector('.hero-text-cont')
      .classList.remove('visuality-hidden');
  })
    .catch(function (error) {
      onEror();
    });

  setInterval(() => {
    fetchTrandingFilmDay();
  }, 10000);
}

window.addEventListener('load', onPageLoad);

function heroRandomaizer() {
  return (kaleidoscope = Math.floor(Math.random() * (19 - 0 + 1)) + 0);
}

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
            <button type="button" class="btn">Watch trailer</button>
            <button type="button" class="hero-blackBtn">
                More details
            </button>
        </div>
        </div>`;
  heroSection.insertAdjacentHTML('afterbegin', box);
}

heroWrap();