import { getTrendingMovie } from '../api/fetchTrandingWeek.js';
import { getGenres } from '../api/fetchGenres.js';
import { getQuerryMovie } from '../api/fetchQuerry';
import { addMarkup } from '../utils/addMarkup';
import { transformData } from '../utils/transformData';
import { selectMovie } from '../components/modal.js';
import { ulRef } from '../refs/catalogRefs.js';
import { updateBtnNames } from '../utils/updateBtnName.js';

export function generateMarkup(movie) {
  const markup = movie
    .map(
      movie => `<li data-id="${movie.id}" class="catalog-movie-item">
            <a class="catalog-item-link link" href="">
                <img class="catalog-list-img" src="https://image.tmdb.org/t/p/w500${
                  movie.poster
                }" alt="${movie.title}" />
                <div class="catalog-movie-desc">
                <h2  class="catalog-movie-title" data-id="${movie.id}">${
        movie.title
      }</h2>
                <p class="catalog-movie-text" data-id="${movie.id}" >
                    ${movie.genreFirst}, ${movie.genreSecond} | 
                    <span data-id="${movie.id} class="catalog-movie-text-date">
                        ${movie.release_date.slice(0, 4)}
                    </span> 
                </p>
                </div>
                </a> 
            </li>`
    )
    .join('');
  return markup;
}

export async function createMarkupPage(selectPage) {
  const responseMovie = await getTrendingMovie(selectPage);
  const responseGenre = await getGenres();

  // преобразование данных
  const transformedData = transformData(
    responseMovie.data.results,
    responseGenre.data.genres
  );

  const markup = generateMarkup(transformedData);
  updateBtnNames(responseMovie.data.total_pages);
  addMarkup(ulRef, markup);

  ulRef.addEventListener('click', selectMovie);
  return responseMovie;
}

export async function createMarkupPageSearch(selectPage, searchQuery) {
  const responseMovie = await getQuerryMovie(selectPage, searchQuery);
  const responseGenre = await getGenres();

  // преобразование данных
  const transformedData = transformData(
    responseMovie.data.results,
    responseGenre.data.genres
  );

  const markup = generateMarkup(transformedData);
  updateBtnNames(responseMovie.data.total_pages);
  addMarkup(ulRef, markup);
  ulRef.addEventListener('click', selectMovie);
  return responseMovie;
}
