
const BASE_URL = 'https://api.themoviedb.org/3/';
const END_POINT_UPCOMING = 'movie/upcoming';
const END_POINT_GENRE = 'genre/movie/list?language=en';
const API_KEY = 'api_key=bd0a4499e3f0b036025d12595397227a';


const upcomingList = document.querySelector('.upcoming-content')
const addLibrary = document.querySelector('.js-add-library')

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

  movie.genres = movie.genre_ids.map(id => genreData.find(genre => genre.id === id).name).join(', ');


  return movie;
}


function createMarkup(movie) {
  let textContent = movie.overview;
  if (movie.overview.length > 300) {
    textContent = (movie.overview).slice(0, 300) + "...";
  }
  const message = `<h3 class="upcoming-alert">Ops! No have any upcoming films...</h3>`;
  let filmContent = `
  <div class ="wrap">
  
    <picture class="upcoming-poster">
        <source media="(min-width:768px)" srcset="https://image.tmdb.org/t/p/original${movie.backdrop_path}"/>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster_path" style="width:auto;"/>
    </picture>

    <div>
    
        <h3 class="upcoming-film-title">${movie.title}</h3>
        
        <div class ="info-film">
            <div>
              <div class="info-film-item">
                <p>Release date</p>
                <p class="release-date">${(movie.release_date).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</p>
              </div>

              <div class="info-film-item">
                <p>Vote / Votes</p>
                  <p class="votes-count">
                    <span>${movie.vote_average}</span><b>/</b><span>${movie.vote_count}</span>
                  </p>
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

  return movie ? filmContent : message;
}

window.addEventListener('load', onPageLoad);

function onPageLoad() {
  fetchMovieDetails().then(movie => {
    upcomingList.insertAdjacentHTML('beforeend', createMarkup(movie));
  });
}



