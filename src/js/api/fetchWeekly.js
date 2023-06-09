// const weeklyList=document.querySelector('.js-weekly-list');

//  const API_KEY = 'bd0a4499e3f0b036025d12595397227a';
//  const BASE_URL = 'https://api.themoviedb.org/3/';
//  const options = {
//      method: 'GET',
//      headers: {
//        accept: 'application/json',
//        Authorization:
//          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDBhNDQ5OWUzZjBiMDM2MDI1ZDEyNTk1Mzk3MjI3YSIsInN1YiI6IjY0N2YxZDM3Y2FlZjJkMDEzNjJjZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.04GEOyHwNXnOZB4gUWNaiyPlLlOZ0z9Ttfl7T5UFMuk',
//      },
//    };
//  const END_POINT='trending/movie/week?language=en-US';
//  window.addEventListener('load', onPageLoad);
//  //відповідь з бекенду
//  async function fetchData(BASE_URL,END_POINT, options) {
//      try {
//        const response = await fetch(`${BASE_URL}${END_POINT}`, options);
//        return response.json();
//      } catch (error) {
//        console.log(error.message);
//      }
//    }

//    async function fetchGenres(options) {
//     const response = await fetch(
//       'https://api.themoviedb.org/3/genre/movie/list?language=en',options);
//     const data = await response.json();
//     return data.genres;
//   }
  
// function onPageLoad(){
//    fetchData(BASE_URL,END_POINT, options).then(data => {
//      console.log(data);//є обєкт!
//      console.log(data.results)//є обэкт з властивостями фото i т.д.!
//      for (let i = 0; i < 3; i++)
//      {const markUp=createMarkup(data.results[i]);//підставляємо обєкт в ф-ію createMarkup, вона створює розмітку
//      weeklyList.insertAdjacentHTML("beforeend",markUp)}
//  })
// }
// //створює розмітку
// function createMarkup(object){     
//   return markUp=    
//  `<li class="weekly-item">
//  <a class="weekly-item-link">
//      <img src="https://image.tmdb.org/t/p/w500${object.poster_path}" alt="${object.original_title}" width="">
//  </a>
//  <div class="weekly-info-tittle-all">
//      <h4 class="weekly-info-tittle">${object.original_title}</h4>
//      <p class="weekly-info-date">${object.genre_ids}|${object.release_date}</p>
//  </div>
//  </li>`}
 //отримує відпоавідь по жанрам
 

// onPageLoad()
// -----------------------------------------
// function generateMarkup(data) {
//     const markup = data
//       .map(
//         movie => `
    //     <li class="weekly-item">
    //       <a class="weekly-item-link">
    //          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" width="">
    //    </a>
    //     <div class="weekly-info-tittle-all">
    //         <h2 class="weekly-info-tittle">${movie.title}</h4>
    //           <p class="weekly-info-date">${movie.genreFirst}|${movie.genreSecond}</p>
    //       </div>
    //      </li>        
//         `
//       )
//       .join('');
  
//     return markup;
//   }

// <li class="weekly-item">
//       <a class="weekly-item-link">
//          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
//    </a>
//     <div class="weekly-info-tittle-all">
//         <h2 class="weekly-info-tittle">${movie.title}</h2>
//           <p class="weekly-info-date">${movie.genreFirst}|${movie.genreSecond}</p>
//       </div>
//      </li> 