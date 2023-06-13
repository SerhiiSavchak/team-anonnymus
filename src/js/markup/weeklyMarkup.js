import { transformData } from '../utils/weeklyUtils';

function renderMarkup(movieData, genreData) {
  const transformedData = transformData(movieData, genreData);

  return generateMarkup(transformedData);
}

function addMarkup(element, markup) {
  element.innerHTML = markup;
}

function generateMarkup(data) {
  const markup = data
    .map(
      movie => ` 
        <li class="weekly-item" data-id="${movie.id}">
          <div class="weekly-wrap" ">
              <img class="weekly-poster-list" src="https://image.tmdb.org/t/p/w500/${
                movie.poster
              }" alt="${movie.title}" />       
          <div class="weekly-info">
              <h2 class="weekly-info-title">${movie.title}</h2>
                  <div class="info-movie">
                      <p class="weekly-info-genre">${movie.genreFirst},&nbsp ${
        movie.genreSecond
      }&nbsp ▏</p>
                      <p class="weekly-info-date">${movie.release_date.slice(
                        0,
                        4
                      )}</p>
                  </div>
          </div>
          </div>     
      </li>
       `
    )
    .join('');

  return markup;
}

export { renderMarkup, addMarkup, generateMarkup };
