import axios from 'axios';

import { BASE_URL, API_KEY } from './apiKey';

export function getQuerryMovie(page = 1, query) {
  return axios.get(`${BASE_URL}search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      include_adult: false,
      include_video: false,
      query,
      page,
      per_page: 10,
    },
  });
}
