import axios from 'axios';

import { BASE_URL, API_KEY } from './apiKey';

function getInfoMovieByID(movieID) {
  return axios.get(`${BASE_URL}movie/${movieID}`, {
    params: {
      api_key: API_KEY,
    },
  });
}

export { getInfoMovieByID };
