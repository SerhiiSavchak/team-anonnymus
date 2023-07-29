import Storage from '../api/localStorageAPI';
import { selectMovie } from './modal';
import { libraryUlRef } from '../refs/libraryRefs';
import { addMarkup } from '../utils/addMarkup';
import {
  generateMarkup,
  renderEmptyLocalMarkup,
} from '../markup/libraryMarkup';

const STORAGE_LIBRARY_KEY = 'movieLibrary';

function renderStorageData() {
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
