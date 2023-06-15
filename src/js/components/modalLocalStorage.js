import Storage from '../api/localStorageAPI';
import { getInfoMovieByID } from '../api/fetchModal.js';
import { URL_FOR_IMG } from '../api/apiKey.js';
import { toggleModal } from '../utils/modalUtils';

const STORAGE_LIBRARY_KEY = 'movieLibrary';
const container = document.querySelector('.library-container');
const libraryUlRef = document.querySelector('.movies-list');

export function onAddRemoveMovie(event) {
  const movieID = event.target.dataset.id;
  if (event.target.textContent === 'Add to my library') {
    AddMovieBtnClick(movieID);
    event.target.textContent = 'Remove from my library';
    if (window.location.pathname === `/library.html`) {
      renderStorageData();
    }
  } else {
    RemoveBtnClick(movieID);

    event.target.textContent = 'Add to my library';
    if (window.location.pathname === `/library.html`) {
      renderStorageData();
      toggleModal();
    }
  }
}

// проверка есть ли такой фильм в библиотеке
export function IsMovieInLibrary(movieID) {
  const savedMovies = Storage.load(STORAGE_LIBRARY_KEY);

  if (!savedMovies) {
    return false;
  }
  // поиск по ид
  const id = savedMovies.findIndex(({ id }) => id === movieID);
  if (id === -1) {
    return false;
  } else {
    return true;
  }
}

async function AddMovieBtnClick(movieID) {
  try {
    const response = await getInfoMovieByID(movieID);
    const movieInfo = response.data;

    // инфо фильма для my library
    const movie = {
      id: movieID,
      poster: `${URL_FOR_IMG}${movieInfo.poster_path}`,
      title: movieInfo.title,
      vote_average: movieInfo.vote_average.toFixed(1),
      vote_count: movieInfo.vote_count,
      popularity: movieInfo.popularity.toFixed(1),
      release: movieInfo.release_date.slice(0, 4),
      genres: movieInfo.genres
        .slice(0, 2)
        .map(({ name }) => name)
        .join(' '),
    };

    let savedMovies = Storage.load(STORAGE_LIBRARY_KEY);

    if (!savedMovies) {
      savedMovies = [];
    }

    savedMovies.push(movie);

    Storage.save(STORAGE_LIBRARY_KEY, savedMovies);
  } catch (error) {
    console.log(error);
  }
}

function RemoveBtnClick(movieID) {
  const savedMovies = Storage.load(STORAGE_LIBRARY_KEY);

  const newSavedMovies = savedMovies.filter(movie => movie.id !== movieID);

  Storage.save(STORAGE_LIBRARY_KEY, newSavedMovies);
}

function renderStorageData() {
  const savedMovies = Storage.load(STORAGE_LIBRARY_KEY);

  if (!savedMovies || savedMovies.length === 0) {
    renderEmptyLocalMarkup();
  } else {
    const markup = generateMarkup(savedMovies);

    addMarkup(libraryUlRef, markup);
  }
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
