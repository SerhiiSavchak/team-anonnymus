import Storage from '../api/localStorageAPI';
import { getInfoMovieByID } from '../api/fetchModal.js';
import { URL_FOR_IMG } from '../api/apiKey.js';

const STORAGE_LIBRARY_KEY = 'movieLibrary';

export function onAddRemoveMovie(event) {
  const savedMovies = Storage.load(STORAGE_LIBRARY_KEY);

  const movieID = event.target.dataset.id;
  if (event.target.textContent === 'Add to my library') {
    AddMovieBtnClick(movieID);
    event.target.textContent = 'Remove from my library';
  } else {
    RemoveBtnClick(movieID);
    event.target.textContent = 'Add to my library';
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
      genres: movieInfo.genres,
    };

    const savedMovies = Storage.load(STORAGE_LIBRARY_KEY);
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
