import axios from 'axios';
import { BASE_URL, API_KEY } from './apiKey';

export function getTrandingDay() {
  return axios.get(`${BASE_URL}trending/all/day?language=en-US`, {
    params: {
      api_key: API_KEY,
    },
  });
}
