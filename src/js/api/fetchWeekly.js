//FETCH

import axios from 'axios';
import { BASE_URL, API_KEY } from './apiKey';
import { async } from '@vimeo/player';

// async function fetchData(END_POINT, options) {
//   try {
//     const response = await fetch(`${BASE_URL}${END_POINT}`, options);
//     const data = await response.json();
//     return data.results.slice(0, 3);
//   } catch (error) {
//     console.log(error.message);
//
// }
