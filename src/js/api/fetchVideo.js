import axios from 'axios';
import { Notify } from 'notiflix';
import { BASE_URL } from './apiKey';

export async function fetchVideo(id, options) {
  try {
    const response = await axios.get(
      `
    ${BASE_URL}movie/${id}/videos`,
      options
    );

    return response.data.results[0].key;
  } catch (error) {
    console.log(error);
    Notify.info('Sorry,we couldnt find thrailer');
  }
}
