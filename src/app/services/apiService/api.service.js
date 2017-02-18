import axios from 'axios';
import {API_CONFIG} from '../../../config';

export default class ApiService {
  constructor() {
    this.getConfig()
      .then((response) => {
        this.config = response;
      });
  }


  getConfig() {
    return axios.get('https://api.themoviedb.org/3/configuration', {
      params: {
        api_key: API_CONFIG.API_KEY
      }
    })
  }

  getMovies(searchString) {
    console.log('yoooo', searchString);
    if (searchString.length < 3) {
      return;
    }
    //TODO - define constant for this
    axios.get('https://api.themoviedb.org/3/search/movie?', {
      params: {
        api_key: API_CONFIG.API_KEY,
        query: searchString
      }
    })
      .then((response) => {
        console.log(response.data.results);
        return response.data.results
      })
      .catch((error) => console.log(error));
  }
}
