import axios from 'axios';

import { BASE_URL, API_KEY } from './apiKey';

export function getGenres() {
  return axios.get(`${BASE_URL}genre/movie/list`, {
    params: {
      api_key: API_KEY,
      language: 'en',
    },
  });
}
