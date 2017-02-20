import angular from 'angular';
import api from '../services/apiService/api.service';

class SearchController {
  constructor(
    $scope,
    apiService,
    $location,
    $anchorScroll,
    API_URLS
  ) {
    this.$scope = $scope;
    this.apiService = apiService;
    this.$location = $location;
    this.$anchorScroll = $anchorScroll;
    this.placeholderImageUrl = API_URLS.PLACEHOLDER_IMAGE;
  }

  search() {
    if (this.searchString.length < 3) {
      return;
    }
    this.apiService.getMovies(this.searchString)
      .then((movies) => {
        this.movies = movies;
      });
  }

  scrollToTopOfCard(index) {
    this.$location.hash('top--' + index);
    this.$anchorScroll();
  }
}

SearchController.$inject = [
  '$scope',
  'apiService',
  '$location',
  '$anchorScroll',
  'API_URLS'
];

export default angular.module('search', [api])
  .controller('SearchController', SearchController)
  .name;
