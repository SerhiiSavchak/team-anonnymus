import {
  onAddRemoveMovie,
  IsMovieInLibrary,
} from '../components/modalLocalStorage.js';

const BASE_URL = 'https://api.themoviedb.org/3/';
const END_POINT_UPCOMING = 'movie/upcoming';
const END_POINT_GENRE = 'genre/movie/list?language=en';
const API_KEY = 'api_key=bd0a4499e3f0b036025d12595397227a';

const upcomingList = document.querySelector('.upcoming-container ');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
  },
};

async function fetchGenres() {
  try {
    const response = await fetch(`${BASE_URL}${END_POINT_GENRE}`, options);
    const data = await response.json();

    return data.genres;
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchData() {
  try {
    const response = await fetch(`${BASE_URL}${END_POINT_UPCOMING}`, options);
    const data = await response.json();

    return data.results[Math.floor(Math.random() * data.results.length)];
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchMovieDetails() {
  const movie = await fetchData();
  const genreData = await fetchGenres();

  movie.genres = movie.genre_ids
    .map(id => genreData.find(genre => genre.id === id).name)
    .slice(0, 2)
    .join(', ');

  return movie;
}

function createMarkup(movie) {
  let textContent = movie.overview;
  if (movie.overview.length > 300) {
    textContent = movie.overview.split('').slice(0, 300).join('') + '...';
  }
  console.log(movie.id);
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
                <p class="info-film-votes-count"><span>${
                  movie.vote_average
                }</span><b>/</b><span>${movie.vote_count}</span></p>
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

window.addEventListener('load', onPageLoad);

function onPageLoad() {
  fetchMovieDetails().then(movie => {
    console.log(movie);
    upcomingList.insertAdjacentHTML('beforeend', createMarkup(movie));
    // кнопка добавления удаления фильма
    const addRemoveBtnRef = document.querySelector('.js-add-remove-library');
    console.log(addRemoveBtnRef);
    addRemoveBtnRef.addEventListener('click', onAddRemoveMovie);
  });
}

{
  /* <div>
        <h3 class="upcoming-film-title">${movie.title}</h3>
        
        <div class ="info-film">
            <div>
              <div class="info-film-item">
                <p>Release date</p>
                <p class="release-date">${(movie.release_date).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</p>
              </div>

              <div class="info-film-item">
                <p>Vote / Votes</p>
                <p class="votes-count"><span>${movie.vote_average}</span><b>/</b><span>${movie.vote_count}</span></p>
              </div>
            </div>
            
            <div>
              <div class="info-film-item">
                <p>Popularity</p>
                <p class="text-color-white">${(Number(movie.popularity.toFixed(1)))}</p>
              </div>

              <div class="info-film-item">
                <p>Genre</p>
                <p class="genre-style text-color-white">${movie.genres}</p>
              </div>
            </div> 
             
        </div>
    
  
      <h3 class="film-description-title">ABOUT</h3>
      <p class="film-description">${textContent}</p>
      <button class="btn">add to my library</button>
    </div>
  </div>`;


 */
}
