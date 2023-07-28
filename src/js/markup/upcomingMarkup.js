import { IsMovieInLibrary } from '../components/modalLocalStorage.js';

let textButton = '';

export function createMarkup(movie) {
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
    <img class="upcoming-img" src="https://image.tmdb.org/t/p/w500${
      movie.poster_path
    }" alt="${movie.title}">
</picture>
    <div class="upcoming-info-wrap">
        <h3 class="upcoming-film-title">${movie.title}</h3>
        
        <div class ="upcoming-info-film-wrap">
            <ul class="upcoming-info-film-list">
              <li class="upcoming-info-film-item">
                <p class="upcoming-info-film-text">Release date</p>
                <p class="upcoming-info-film-text release ">${movie.release_date.replace(
                  /^(\d+)-(\d+)-(\d+)$/,
                  `$3.$2.$1`
                )}</p>
              </li>

              <li class="upcoming-info-film-item">
                <p class="upcoming-info-film-text">Vote / Votes</p>
                <p class="upcoming-info-film-text"><span class="upcoming-info-film-span">${
                  movie.vote_average
                }</span ><b>/</b><span class="upcoming-info-film-span">${
    movie.vote_count
  }</span></p>
              </li>
            </ul>
            
            <ul class="upcoming-info-film-list">
              <li class="upcoming-info-film-item">
                <p class="upcoming-info-film-text">Popularity</p>
                <p class="upcoming-info-film-text white">${Number(
                  movie.popularity.toFixed(1)
                )}</p>
              </li>

              <li class="upcoming-info-film-item">
                <p class="upcoming-info-film-text">Genre</p>
                <p class="upcoming-info-film-text white genre-padding-bottom">${
                  movie.genres
                }</p>
              </li>
            </ul> 
             
        </div>
    
        <div class ="upcoming-info-film-overview">
      <h3 class="upcoming-info-film-title">ABOUT</h3>
      <p class="upcoming-info-film-description">${textContent}</p>
      <button class="btn js-add-remove-library" type="button" data-id="${
        movie.id
      }">${textButton}</button>
      </div>
    </div>
  </div>`;

  return !movie.results ? filmContent : message;
}
