import { selectMovie } from './modal';

const BASE_URL = 'https://api.themoviedb.org/3/';
const END_POINT =
  'trending/movie/week?language=en-US&include_adult=false&include_video=false&page=1&per_page=10';
const STORAGE_KEY = 'ID';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
  },
};

// REFS
const ulRef = document.querySelector('.catalog-list');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form-input');
const errorContainer = document.querySelector('.error-container');
const btnClear = document.querySelector('.btn-clear');

// WORKSPACE
window.addEventListener('load', onPageLoad);
searchForm.addEventListener('submit', onSearchSubmit);
btnClear.addEventListener('click', onBtnClearClick);

// LISTENER
function onPageLoad() {
  const screenWidth = window.innerWidth;
  let perPage;

  if (screenWidth >= 768) {
    perPage = 20;
  } else {
    perPage = 10;
  }

  const endpoint = `trending/movie/week?language=en-US&include_adult=false&include_video=false&page=1&per_page=${perPage}`;

  fetchData(endpoint, options).then(response => {
    renderMarkup(response.slice(0, perPage)).then(markup => {
      addMarkup(ulRef, markup);
      ulRef.addEventListener('click', selectMovie);
    });
  });
}

searchInput.addEventListener('input', onCatalogInput);
function onSearchSubmit(event) {
  event.preventDefault();
  const searchValue = searchInput.value.trim();
  let perPage;

  if (window.innerWidth >= 768) {
    perPage = 20;
  } else {
    perPage = 10;
  }

  if (searchValue !== '') {
    const searchEndpoint = `search/movie?query=${searchValue}&language=en-US&page=1&per_page=${perPage}`;

    fetchData(searchEndpoint, options).then(response => {
      if (response.length > 0) {
        renderMarkup(response.slice(0, perPage)).then(markup => {
          addMarkup(ulRef, markup);
        });
        hideNoResultsMessage();
      } else {
        showNoResultsMessage();
      }
    });
  } else {
    onPageLoad();
    hideNoResultsMessage();
  }
}

function onBtnClearClick(evt) {
  searchInput.value = '';
}

function onCatalogInput(evt) {
  if (evt.target.value.length === 0) {
    btnClear.style.display = 'none';
    return;
  }
  btnClear.style.display = 'block';
}

// ---- Функція для приховування повідомлення про відсутність результатів
function hideNoResultsMessage() {
  const errorMessage = errorContainer.querySelector('.no-results-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}

function showNoResultsMessage() {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('no-results-message');
  errorMessage.textContent =
    "OOPS... We are very sorry! We don't have any results matching your search.";
  errorContainer.appendChild(errorMessage);
  ulRef.innerHTML = '';
}

// FETCH
async function fetchData(endpoint, options) {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  const data = await response.json();
  return data.results.slice(0, 20);
}

async function fetchGenres(options) {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?language=en',
    options
  );
  const data = await response.json();
  return data.genres;
}

// MARKUP
function renderMarkup(movieData) {
  return fetchGenres(options).then(genreData => {
    const transformedData = transformData(movieData, genreData);

    return generateMarkup(transformedData);
  });
}

function generateMarkup(movie) {
  const markup = movie
    .map(
      movie => `<li data-id="${movie.id}" class="catalog-movie">
        <div class="catalog-item-link" href="">
            <img class="catalog-list-img" src="https://image.tmdb.org/t/p/w500${
              movie.poster
            }" alt="${movie.title}" />
            <div class="catalog-movie-desc">
            <p  class="catalog-item-title" data-id="${movie.id}">${
        movie.title
      }</p>
            <p class="catalog-item-movie" data-id="${movie.id}" >
                ${movie.genreFirst}, ${movie.genreSecond} | 
                <span data-id="${movie.id} class="catalog-item-date">
                    ${movie.release_date.slice(0, 4)}
                </span> 
            </p>
            </div>
            </div> 
        </li>`
    )
    .join('');
  return markup;
}

function addMarkup(element, markup) {
  element.innerHTML = markup;
}

// UTILS
function transformData(movieData, genreData) {
  const transformedMovies = movieData.map(movie => {
    const genreIds = movie.genre_ids;
    const genres = genreIds.map(
      id => genreData.find(genre => genre.id === id).name
    );

    return {
      release_date: movie.release_date,
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      genreFirst: genres[0],
      genreSecond: genres[1],
    };
  });

  return transformedMovies;
}
