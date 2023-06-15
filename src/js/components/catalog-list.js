import { selectMovie } from './modal';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getTrendingMovie } from '../api/fetchTranding.js';
import { getGenres } from '../api/fetchGenres.js';
import { getQuerryMovie } from '../api/fetchQuerry';

// pagination
const containerTui = document.getElementById('tui-pagination-container');
const optionsTui = {
  // totalItems: 10,
  itemsPerPage: 20,
  visiblePages: 4,
  // page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn tui-num-page">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected tui-num-page">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{page}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip tui-order-{{type}}-ellip">' +
      '<span class="tui-ico-ellip"></span>' +
      '</a>',
  },
};
const pagination = new Pagination(containerTui, optionsTui);
const page = pagination.getCurrentPage();

function addLeadingZero(number) {
  return number.toString().padStart(2, '0');
}

export function updateBtnNames(lastPage) {
  const pagination = document.querySelector('.catalog-gallery-pagination');
  const firstButton = pagination.querySelector('.tui-first');
  const lastButton = pagination.querySelector('.tui-last');
  const pageButton = pagination.querySelectorAll('.tui-num-page');
  const tuiPageBtn = pagination.querySelectorAll('.tui-page-btn');

  firstButton.textContent = '01';
  lastButton.textContent = addLeadingZero(lastPage);
  pageButton.forEach(
    page => (page.textContent = addLeadingZero(page.textContent))
  );
}

// REFS
const ulRef = document.querySelector('.catalog-list');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form-input');
const errorContainer = document.querySelector('.error-container');
const btnClear = document.querySelector('.btn-clear');

pagination.on('afterMove', onClickPage);

async function onPageLoad() {
  try {
    const responseMovie = await createMarkupPage(page);

    pagination.reset(responseMovie.data.total_results);
    updateBtnNames(responseMovie.data.total_pages);
    containerTui.classList.remove('visuality-hidden');
  } catch (error) {
    console.log(error);
  }
}

async function createMarkupPage(selectPage) {
  const responseMovie = await getTrendingMovie(selectPage);
  const responseGenre = await getGenres();

  // преобразование данных
  const transformedData = transformData(
    responseMovie.data.results,
    responseGenre.data.genres
  );

  const markup = generateMarkup(transformedData);
  updateBtnNames(responseMovie.data.total_pages);
  addMarkup(ulRef, markup);

  ulRef.addEventListener('click', selectMovie);
  return responseMovie;
}

async function createMarkupPageSearch(selectPage, searchQuery) {
  const responseMovie = await getQuerryMovie(selectPage, searchQuery);
  const responseGenre = await getGenres();

  // преобразование данных
  const transformedData = transformData(
    responseMovie.data.results,
    responseGenre.data.genres
  );

  const markup = generateMarkup(transformedData);
  updateBtnNames(responseMovie.data.total_pages);
  addMarkup(ulRef, markup);
  ulRef.addEventListener('click', selectMovie);
  return responseMovie;
}

async function onClickPage(event) {
  const currentPage = event.page;

  try {
    const responseMovie = await createMarkupPage(currentPage);
  } catch (error) {
    console.log(error);
  }
}

async function onClickPageSearch(event) {
  const currentPage = event.page;
  const searchQuery = searchInput.value.trim();
  try {
    const responseMovie = await createMarkupPageSearch(
      currentPage,
      searchQuery
    );
  } catch (error) {
    console.log(error);
  }
}

async function onSearchFormSubmit(event) {
  event.preventDefault();

  pagination.off('afterMove', onClickPage);
  containerTui.classList.add('visuality-hidden');
  const searchQuery = searchInput.value.trim();

  if (!searchQuery) {
    return alert('Введіть ваш запит');
  }

  try {
    const responseMovie = await createMarkupPageSearch(page, searchQuery);

    pagination.reset(responseMovie.data.total_results);
    updateBtnNames(responseMovie.data.total_pages);

    containerTui.classList.remove('visuality-hidden');

    pagination.on('afterMove', onClickPageSearch);

    if (responseMovie.data.total_results <= 20) {
      console.log(responseMovie.data.total_pages);
      containerTui.classList.add('visuality-hidden');
    }
  } catch (error) {
    errorContainer.innerHTML = `<p class="catalog-error-text">OOPS...<br>
      We are very sorry!<br>
      We don’t have any results matching your search.</p>`;
  }
}

// WORKSPACE
window.addEventListener('load', onPageLoad);
searchForm.addEventListener('submit', onSearchFormSubmit);
btnClear.addEventListener('click', onBtnClearClick);

searchInput.addEventListener('input', onCatalogInput);

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
