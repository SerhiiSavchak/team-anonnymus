import {
  onAddRemoveMovie,
  IsMovieInLibrary,
} from '../components/modalLocalStorage.js';
import { getGenres } from '../api/fetchGenres.js';
import { getUpcoming } from '../api/fetchUpcoming.js';

const upcomingList = document.querySelector('.upcoming-container ');

let textButton = '';

window.addEventListener('load', onPageLoad);

async function fetchMovieDetails() {
  try {
    const responseMovie = await getUpcoming();
    const movie =
      responseMovie.data.results[
        Math.floor(Math.random() * responseMovie.data.results.length)
      ];

    const responseGenre = await getGenres();
    const genreData = responseGenre.data.genres;

    const genres = movie.genre_ids
      .map(id => genreData.find(genre => genre.id === id).name)
      .slice(0, 2)
      .join(', ');
    movie.genres = genres;
    upcomingList.insertAdjacentHTML('beforeend', createMarkup(movie));
    // кнопка добавления удаления фильма
    const addRemoveBtnRef = document.querySelector('.js-add-remove-library');
    addRemoveBtnRef.addEventListener('click', onAddRemoveMovie);
  } catch (error) {
    console.log(error.message);
  }
}

function onPageLoad() {
  fetchMovieDetails();
}

function createMarkup(movie) {
  let textContent = movie.overview;
  if (movie.overview.length > 300) {
    textContent = movie.overview;
  }

  if (IsMovieInLibrary(movie.id)) {
    textButton = 'Remove from my library';
  } else {
    textButton = 'Add to my library';
  }
  const message = `<h3 class="upcoming-alert">Ops! No upcoming films...</h3>`;
  let filmContent = ` 
  <div class ="upcoming-section-wrap">
    <picture class="upcoming-poster">
    <source media="(min-width:768px)" srcset="https://image.tmdb.org/t/p/original${
      movie.backdrop_path
    }">
    <img src="https://image.tmdb.org/t/p/w500${
      movie.poster_path
    }" alt="poster_path" style="width:auto;">
</picture>
    <div class="upcoming-info-wrap">
        <h3 class="upcoming-film-title">${movie.title}</h3>
        
        <div class ="info-film">
            <div class="info-film-block">
              <div class="info-film-item">
                <p class="info-film-item-text">Release date</p>
                <p class="info-film-resp-release-date">${movie.release_date.replace(
                  /^(\d+)-(\d+)-(\d+)$/,
                  `$3.$2.$1`
                )}</p>
              </div>

              <div class="info-film-item">
                <p class="info-film-item-text">Vote / Votes</p>
                <p class="info-film-votes-count"><span class="upcoming-info-span">${
                  movie.vote_average
                }</span ><b>/</b><span class="upcoming-info-span">${
    movie.vote_count
  }</span></p>
              </div>
            </div>
            
            <div class="info-film-block">
              <div class="info-film-item">
                <p class="info-film-item-text">Popularity</p>
                <p class="info-film-popularity text-color-white">${Number(
                  movie.popularity.toFixed(1)
                )}</p>
              </div>

              <div class="info-film-item">
                <p class="info-film-item-text">Genre</p>
                <p class="info-film-genre-style text-color-white genre-padding-bottom">${
                  movie.genres
                }</p>
              </div>
            </div> 
             
        </div>
    
        <div class ="info-film-overview">
      <h3 class="film-description-title">ABOUT</h3>
      <p class="film-description">${textContent}</p>
      <button class="btn js-add-remove-library" type="button" data-id="${
        movie.id
      }">${textButton}</button>
      </div>
    </div>
  </div>`;

  return !movie.results ? filmContent : message;
}
