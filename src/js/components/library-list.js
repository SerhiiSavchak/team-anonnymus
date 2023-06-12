// необходимые константы

import { BASE_URL } from "../api/apiKey";
const STORAGE_KEY = 'movies-id'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
  },
};

// Функция отправляет запрос для получения данных о фильме

async function fetchMovieDetails(movieID) {
  try {
    const response = await fetch(`${BASE_URL}movie/${movieID}?language=en-US`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Функция получает массив идентификаторов фильмов из Local Storage

function getMoviesFromLocalStorage() {
  let moviesID = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  console.log(moviesID)
  if (moviesID.length === 0) {
    renderEmptyLocalMarkup();
    console.log(moviesID);
  }
  return moviesID;
  
}
// сохраняем результат функции(масив ID) в переменную для дальнейшей работы

const moviesID = getMoviesFromLocalStorage();

// Функция перебирает массив идентификаторов фильмов и создает массив промисов 

async function renderFetch(moviesID) {
  try {
    const moviePromises = moviesID.map(movieID => fetchMovieDetails(movieID));
    const moviesData = await Promise.all(moviePromises);
    return moviesData;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}

// Используется метод then для обработки результатов промиса

renderFetch(moviesID)
  .then(results => {
    console.log(results);
    renderData(results)
  })
  .catch(error => {
    console.error('Error fetching movie details:', error);
  });


// функция перебора жанров

function getGenreNamesByIds(genreIds) {
  if (!genreIds || genreIds.length === 0) {
    return [];
  }

  const genreNames = genreIds.map(genreId => {
    switch (genreId) {
      case 28:
        return "Action";
      case 12:
        return "Adventure";
      case 16:
        return "Animation";
      case 35:
        return "Comedy";
      case 80:
        return "Crime";
      case 878:
        return "Sci-fi";
      case 53:
        return "Thriller";
      case 10751:
        return "Family";
      case 14:
        return "Fantasy";
      case 10749:
        return "Romance";
      case 9648:
        return "Mystery";
      default:
        return "12";
    }
  });

  return genreNames.slice(0, 2);
}

// функция рендера разметки

function renderData(movieItems) {
  const container = document.getElementById('movies-container');

  const movieItem = movieItems.map(movie => {
    const {
      poster_path,
      release_date,
      title,
      vote_average,
      genre_ids
    } = movie;
    
    const genreIds = genre_ids;
    const genres = getGenreNamesByIds(genreIds);

    const releaseYear = release_date.slice(0, 4);
    return `
      <li class="library-list-item">
        <a class="library-item-link" href=""> 
          <img class="library-list-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" />
          <div class="library-item-desc">
            <div class="title-genre-date">
              <p class="library-item-title">${title}</p>
              <p class="library-item-genre-date"> 
                ${genres.join(', ')} | 
                <span class="library-item-date">
                  ${releaseYear}
                </span> 
              </p>
            </div>
          </div>
          <div class="library-item-rating">
            <div class="rating_value">${vote_average}</div>
            <div class="rating-body">
              <div class="rating__active" data-rating="${vote_average}">
                <div class="rating__items">
                  <input type="radio" class="rating__item" value="1" name="rating">
                  <input type="radio" class="rating__item" value="2" name="rating">
                  <input type="radio" class="rating__item" value="3" name="rating">
                  <input type="radio" class="rating__item" value="4" name="rating">
                  <input type="radio" class="rating__item" value="5" name="rating">
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    `;
  });

  container.insertAdjacentHTML('beforeend', movieItem.join(''));

  const ratingActiveElements = document.querySelectorAll('.rating__active');
  ratingActiveElements.forEach(ratingActiveElement => {
    const rating = ratingActiveElement.dataset.rating;
    const widthPercentage = (rating / 10) * 100;

    ratingActiveElement.style.width = `${widthPercentage}%`;
  });
}