import axios from 'axios';

import { BASE_URL, API_KEY } from './apiKey';

export function getUpcoming() {
  return axios.get(`${BASE_URL}movie/upcoming`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
}
