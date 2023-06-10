const BASE_URL = 'https://api.themoviedb.org/3/';
const END_POINT = 'trending/all/week?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
  },
};

// REFS

const weeklyUlRef = document.querySelector('.weekly-list');

// WORKSPACE

window.addEventListener('load', onPageLoad);

// LISTENERS
function onPageLoad() {
  fetchData(END_POINT, options).then(movieData => {
    renderMarkup(movieData).then(markup => {
      addMarkup(weeklyUlRef, markup);
    });
  });
}

// UTILS

function transformData(movieData, genreData) {
  const transformedMovies = movieData.map(movie => {
    const genreIds = movie.genre_ids;
    const genres = genreIds.map(id => genreData.find(genre => genre.id === id).name);

    return {
      release_date: movie.release_date,
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      genreFirst: genres[0],
      genreSecond: genres[1],
    };
  });

  return transformedMovies;
}

// MARKUP

function generateMarkup(data) {
  const markup = data
    .map(
      movie => ` 
      <li class="weekly-item">
        <a class="weekly-item-link" href="">
            <img class="library-list-img" src="https://image.tmdb.org/t/p/w500/${movie.poster}" alt="${movie.title}" />       
        <div class="weekly-info-tittle-all">
            <h2 class="weekly-info-tittle">${movie.title}</h2>
                <div class="info-movie">
                    <p class="weekly-info-date">${movie.genreFirst} ${movie.genreSecond},&nbsp</p>
                    <p>${movie.release_date.slice(0, 4)}</p>
                </div>
        </div></a>     
    </li>
     `

    )
    .join('');

  return markup;
}

function renderMarkup(movieData) {
  return fetchGenres(options).then(genreData => {
    const transformedData = transformData(movieData, genreData);
    console.log(transformedData);

    return generateMarkup(transformedData);
  });
}

function addMarkup(element, markup) {
  element.innerHTML = markup;
}

//FETCH
async function fetchData(END_POINT, options) {
  const response = await fetch(`https://api.themoviedb.org/3/${END_POINT}`, options);
  const data = await response.json();
  return data.results.slice(0, 3);
}

async function fetchGenres(options) {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    options
  );
  const data = await response.json();
  return data.genres;
}
