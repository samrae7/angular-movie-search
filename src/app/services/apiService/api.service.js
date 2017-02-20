import angular from 'angular';
import {API_CONFIG} from '../../../config';

class ApiService {
  constructor($http, API_URLS) {
    this.API_URLS = API_URLS;
    this.$http = $http;
    this.getConfig()
      .then((response) => {
        this.imagesConfig = response.data.images;
        this.baseUrlForPosters = this.getBaseUrlForPosters()
      })
      .catch((error) => console.log(error, 'error'));
  }


  getConfig() {
    return this.$http.get(this.API_URLS.BASE + this.API_URLS.IMAGE_CONFIG, {
      params: {
        api_key: API_CONFIG.API_KEY
      }
    })
  }

  getBaseUrlForPosters() {
    if (this.imagesConfig) {
      return this.imagesConfig.base_url + this.imagesConfig.poster_sizes[3];
    }
  }

  getMovies(searchString) {
    return this.$http.get(this.API_URLS.BASE + this.API_URLS.SEARCH, {
      params: {
        api_key: API_CONFIG.API_KEY,
        query: searchString
      }
    })
      .then((response) => {
        let movies = response.data.results;
        movies.forEach((movie) => {
          if (movie.poster_path) {
            movie.posterUrl = this.baseUrlForPosters + movie.poster_path
          }
        });
        return movies;
      })
      .catch((error) => console.log(error));
  }
}

ApiService.$inject = ['$http', 'API_URLS'];

export default angular.module('api', [])
  .constant('API_URLS', {
    BASE: 'https://api.themoviedb.org/3',
    SEARCH: '/search/movie',
    IMAGE_CONFIG: '/configuration',
    PLACEHOLDER_IMAGE: 'https://placeholdit.imgix.net/~text?txtsize=30&txt=No+poster+available&w=342&h=643&txttrack=0'
  })
  .service('apiService', ApiService)
  .name;
