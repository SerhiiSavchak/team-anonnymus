import { BASE_URL } from "../api/apiKey";

const END_POINT = 'trending/movie/week?language=en-US';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
  },
};

async function fetchData() {
  const response = await fetch(`${BASE_URL}/${END_POINT}`, options);
  const data = await response.json();
  return data.results;
}

fetchData().then(results => {
  console.log(results);
  renderData(results);
}).catch(error => {
  console.error(error);
});

function getGenreNamesByIds(genreIds) {
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
        return "Sci-fy";
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

function renderData(results) {
  const container = document.getElementById('movies-container');

  const movieItems = results.map(movie => {
    const {
      poster_path,
      release_date,
      title,
      vote_average,
      genre_ids
    } = movie;

    const genres = getGenreNamesByIds(genre_ids);

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

  container.insertAdjacentHTML('beforeend', movieItems.join(''));

  // Получите все элементы .rating__active и установите ширину в соответствии с рейтингом
  const ratingActiveElements = document.querySelectorAll('.rating__active');
  ratingActiveElements.forEach(ratingActiveElement => {
    const rating = ratingActiveElement.dataset.rating;

    // Вычислите ширину в процентах на основе значения рейтинга
    const widthPercentage = (rating / 10) * 100;

    // Установите ширину элемента .rating__active
    ratingActiveElement.style.width = `${widthPercentage}%`;
  });
}

// Вызовите fetchData() и renderData() как в вашем исходном коде
