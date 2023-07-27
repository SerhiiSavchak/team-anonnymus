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
    <img src="https://image.tmdb.org/t/p/w500${
      movie.poster_path
    }" alt="poster_path" style="width:auto;">
</picture>
    <div class="upcoming-info-wrap">
        <h3 class="upcoming-film-title">${movie.title}</h3>
        
        <div class ="info-film">
            <ul class="info-film-block">
              <li class="info-film-item">
                <p class="info-film-item-text">Release date</p>
                <p class="info-film-resp-release-date">${movie.release_date.replace(
                  /^(\d+)-(\d+)-(\d+)$/,
                  `$3.$2.$1`
                )}</p>
              </li>

              <li class="info-film-item">
                <p class="info-film-item-text">Vote / Votes</p>
                <p class="info-film-votes-count"><span class="upcoming-info-span">${
                  movie.vote_average
                }</span ><b>/</b><span class="upcoming-info-span">${
    movie.vote_count
  }</span></p>
              </li>
            </ul>
            
            <ul class="info-film-block">
              <li class="info-film-item">
                <p class="info-film-item-text">Popularity</p>
                <p class="info-film-popularity text-color-white">${Number(
                  movie.popularity.toFixed(1)
                )}</p>
              </li>

              <li class="info-film-item">
                <p class="info-film-item-text">Genre</p>
                <p class="info-film-genre-style text-color-white genre-padding-bottom">${
                  movie.genres
                }</p>
              </li>
            </ul> 
             
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
