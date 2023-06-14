import axios from 'axios';

import { BASE_URL, API_KEY } from './apiKey';

export function getTrendingMovie(page = 1) {
  return axios.get(`${BASE_URL}trending/movie/week`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      include_adult: false,
      include_video: false,
      page,
      //per_page: 10,
    },
  });
}
