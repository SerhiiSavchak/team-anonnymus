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

//FETCH

async function fetchData(END_POINT, options) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${END_POINT}`,
      options
    );
    const data = await response.json();
    return data.results.slice(0, 3);
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchGenres(options) {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?language=en',
      options
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.log(error.message);
  }
}

export { fetchData };
export { fetchGenres };
