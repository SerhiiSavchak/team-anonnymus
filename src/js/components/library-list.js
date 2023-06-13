let STORAGE_KEY = 'movies'
function getMoviesFromLocalStorage() {
  let moviesData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  console.log(moviesData)
  if (moviesData.length === 0) {
    renderEmptyLocalMarkup();
    console.log(moviesData);
  }
  return moviesData;
  
}
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
function renderData() {
  const container = document.getElementById('movies-container');
  const moviesFromLocalStorage = getMoviesFromLocalStorage(); 

  const movieItems = moviesFromLocalStorage.map(movie => {
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

  const ratingActiveElements = document.querySelectorAll('.rating__active');
  ratingActiveElements.forEach(ratingActiveElement => {
    const rating = ratingActiveElement.dataset.rating;
    const widthPercentage = (rating / 10) * 100;

    ratingActiveElement.style.width = `${widthPercentage}%`
  });
}
renderData();

function renderEmptyLocalMarkup() {
  const container = document.getElementById('movies-container');
  const failureText = `
    <p>OOPS...<br>
    We are very sorry!<br>
    We don't have any results matching your search.</p>
  `;
  container.innerHTML = failureText;
}

