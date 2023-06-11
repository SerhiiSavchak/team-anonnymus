console.log('hello');
import axios from 'axios';

const heroCont = document.querySelector('.hero');
const bigSizeText = document.querySelector('.hero-text-big');
const smallSizeText = document.querySelector('.hero-text-mobile');
const heroTitle = document.querySelector('.hero-title');
const heroBtn = document.querySelector('.hero-btn');
const ratings = document.querySelectorAll('.rating');
const ratingValue = document.querySelector('.rating_value');
const ratingW = document.querySelector('.rating');
const blackHeroBtn = document.querySelector('.blackBtn');


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
    appendStartHeroMarkup(data);
    console.log('work');
    const fetchInfo = data.data.results;
    console.log(fetchInfo);
    appendHeroMarkup(data);

  }
}



function appendStartHeroMarkup(data) {
  const fetchInfo = data.data.results[16];
  ratingW.classList.remove('visuality-hidden');
  ratingValue.textContent = fetchInfo.vote_average;
  heroTitle.textContent = fetchInfo.original_title;

  bigSizeText.textContent = `${fetchInfo.overview
    .split(' ')
    .slice(0, 50)
    .join(' ')}...`;

  smallSizeText.textContent = `${fetchInfo.overview
    .split(' ')
    .slice(0, 25)
    .join(' ')}...`;

  heroCont.style.backgroundImage = `linear-gradient(
      86.77deg,
      #111111 30.38%,
      rgba(17, 17, 17, 0) 65.61%
    ), url(https://image.tmdb.org/t/p/original/${fetchInfo.backdrop_path})`;
  initRatings();
  fetchBTN();
}

fetchTrandingFilmDay();

let curentFilmId = '';

function appendHeroMarkup(data) {
  setInterval(() => {
    ratingW.classList.remove('visuality-hidden');

    const kaleidoscope = Math.floor(Math.random() * (19 - 0 + 1)) + 0;

    const fetchInfo = data.data.results[kaleidoscope];
    ratingValue.textContent = fetchInfo.vote_average;
    heroTitle.textContent = fetchInfo.original_title;

    bigSizeText.textContent = `${fetchInfo.overview
      .split(' ')
      .slice(0, 50)
      .join(' ')}...`;

    smallSizeText.textContent = `${fetchInfo.overview
      .split(' ')
      .slice(0, 25)
      .join(' ')}...`;

    heroCont.style.backgroundImage = `linear-gradient(
      86.77deg,
      #111111 30.38%,
      rgba(17, 17, 17, 0) 65.61%
    ), url(https://image.tmdb.org/t/p/original/${fetchInfo.backdrop_path})`;

    curentFilmId = fetchInfo.id;
    console.log(curentFilmId);
    initRatings();
    fetchBTN();
  }, 20000);
}

console.log(curentFilmId);

function fetchBTN() {
  if (blackHeroBtn.classList.contains('visuality-hidden')) {
    blackHeroBtn.classList.remove('visuality-hidden');
    heroBtn.textContent = 'Watch trailer';
  }
  return;
}


//start rating

function initRatings() {
  let retingActive, ratingValue;
  for (i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
  }

  function initRatingVars(rating) {
    retingActive = rating.querySelector('.rating_active');
    ratingValue = rating.querySelector('.rating_value');
  }

  function setRatingActiveWidth(i = ratingValue.innerHTML) {
    const ratingActiveWidth = i / 0.05 / 2;
    retingActive.style.width = `${ratingActiveWidth}%`;
  }
}

// end rating


