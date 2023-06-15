import Storage from '../api/localStorageAPI';
import { selectMovie } from '../components/modal';

const STORAGE_LIBRARY_KEY = 'movieLibrary';
const container = document.querySelector('.library-container');
const libraryUlRef = document.querySelector('.movies-list');

export function renderStorageData() {
  const savedMovies = Storage.load(STORAGE_LIBRARY_KEY);

  if (!savedMovies || savedMovies.length === 0) {
    renderEmptyLocalMarkup();
  } else {
    const markup = generateMarkup(savedMovies);

    addMarkup(libraryUlRef, markup);

    libraryUlRef.addEventListener('click', selectMovie);
  }
}

window.addEventListener('load', onPageLoad);

function onPageLoad() {
  renderStorageData();
}

function generateMarkup(data) {
  const markup = data
    .map(
      movie => ` <li data-id="${movie.id}" class="library-list-item">
         <div class="library-item-wrap" href="">
           <img class="library-list-img" src="${movie.poster}" alt="${movie.title}" />
           <div class="library-item-desc">
             <div class="title-genre-date">
               <h2 data-id="${movie.id}" class="library-item-title">${movie.title}</h2>
               <p data-id="${movie.id}" class="library-item-genre-date">
                 ${movie.genres} |
                 <span data-id="${movie.id}" class="library-item-date">
                   ${movie.release}
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

function renderEmptyLocalMarkup() {
  const failureText = `<p class="library-error-text">OOPS...<br>
  We are very sorry!<br>
  We don’t have any results matching your search.</p>
  <a href="./catalog.html" class="library-error-btn btn link">Search movie</a>`;
  container.innerHTML = failureText;
}
