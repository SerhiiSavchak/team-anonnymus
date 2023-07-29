import { containerRef } from '../refs/libraryRefs';

export function generateMarkup(data) {
  const markup = data
    .map(
      movie => ` <li data-id="${movie.id}" class="library-list-item">
           <div class="library-item-wrap" href="">
             <img class="library-list-img" src="${movie.poster}" alt="${movie.title}" />
             <div class="library-item-desc">
               <div class="title-genre-date">
                 <h2 data-id="${movie.id}" class="library-item-title">${movie.title}</h2>
                 <p data-id="${movie.id}" class="library-item-genre-date">
                   ${movie.genres} |
                   <span data-id="${movie.id}" class="library-item-date">
                     ${movie.release}
                   </span>
                 </p>
               </div>
             </div>
            
         </li>`
    )
    .join('');

  return markup;
}

export function renderEmptyLocalMarkup() {
  const failureText = `<p class="library-error-text">OOPS...<br>
    We are very sorry!<br>
    We don’t have any results matching your search.</p>
    <a href="./catalog.html" class="library-error-btn btn link">Search movie</a>`;
  containerRef.innerHTML = failureText;
}
