// import { API_KEY, BASE_URL } from "./api/";
let page = 1;
 const weeklyList=document.querySelector('.js-weekly-list');

 const API_KEY = 'bd0a4499e3f0b036025d12595397227a';
 const BASE_URL = 'https://api.themoviedb.org/3/';
 const options = {
     method: 'GET',
     headers: {
       accept: 'application/json',
       Authorization:
         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
     },
   };
 const END_POINT='trending/movie/week?language=en-US';
 window.addEventListener('load', onPageLoad);
 //відповідь з бекенду
 async function fetchData(BASE_URL,END_POINT, options) {
     try {
       const response = await fetch(`${BASE_URL}${END_POINT}`, options);
       return response.json();
     } catch (error) {
       console.log(error.message);
     }
   }

   async function fetchGenres(options) {
    const response = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?language=en',options);
    const data = await response.json();
    return data.genres;
  }
  
function onPageLoad(){
   fetchData(BASE_URL,END_POINT, options).then(data => {
     console.log(data);//є обєкт!
     console.log(data.results)//є обэкт з властивостями фото i т.д.!
     for (let i = 0; i < 3; i++)
     {const markUp=createMarkup(data.results[i]);//підставляємо обєкт в ф-ію createMarkup, вона створює розмітку
     weeklyList.insertAdjacentHTML("beforeend",markUp)}
 })
}
//створює розмітку
function createMarkup(object){     
  return markUp=    
 `<li class="weekly-item">
 <a class="weekly-item-link">
     <img src="https://image.tmdb.org/t/p/w500${object.poster_path}" alt="${object.original_title}" width="">
 </a>
 <div class="weekly-info-tittle-all">
     <h4 class="weekly-info-tittle">${object.original_title}</h4>
     <p class="weekly-info-date">${object.genre_ids}|${object.release_date}</p>
 </div>
 </li>`}
 //отримує відпоавідь по жанрам
 

// onPageLoad()


 
//  /---------------------------------------------------------------/
// const BASE_URL = 'https://api.themoviedb.org/3/';
// const END_POINT = 'trending/all/week?language=en-US';

// const weeklyUlRef = document.querySelector('.weekly-list');

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
//   },
// };

// window.addEventListener('load', onPageLoad);

// function onPageLoad() {
//   fetchData(END_POINT, options).then(movieData => {
//     renderMarkup(movieData).then(markup => {
//       addMarkup(weeklyUlRef, markup);
//     });
//   });
// }

// function transformData(movieData, genreData) {
//   const transformedMovies = movieData.map(movie => {
//     const genreIds = movie.genre_ids;
//     const genres = genreIds.map(id => genreData.find(genre => genre.id === id).name);

//     return {
//       id: movie.id,
//       title: movie.title,
//       poster: movie.poster_path,
//       genreFirst: genres[0],
//       genreSecond: genres[1],
//     };
//   });

//   return transformedMovies;
// }

// function generateMarkup(data) {
//   const markup = data
//     .map(
//       movie => `
//         <div class="movie-card">
//           <img src="https://image.tmdb.org/t/p/w500/${movie.poster}" alt="${movie.title}" class="movie-poster">
//           <div class="movie-details">
//             <h2 class="movie-title">${movie.title}</h2>
//             <p class="movie-genres">${movie.genreFirst} ${movie.genreSecond}</p>
    
//           </div>
//         </div>
//       `
//     )
//     .join('');

//   return markup;
// }

// function renderMarkup(movieData) {
//   return fetchGenres(options).then(genreData => {
//     const transformedData = transformData(movieData, genreData);
//     console.log(transformedData);

//     return 
(transformedData);
//   });
// }

// function addMarkup(element, markup) {
//   element.innerHTML = markup;
// }

// async function fetchData(END_POINT, options) {
//   const response = await fetch(
//     'https://api.themoviedb.org/3/trending/all/week?language=en-US',
//     options
//   );
//   const data = await response.json();
//   return data.results.slice(0, 3);
// }
// .--------
// async function fetchGenres(options) {
//   const response = await fetch(
//     'https://api.themoviedb.org/3/genre/movie/list?language=en',
//     options
//   );
//   const data = await response.json();
//   return data.genres;
// }
 