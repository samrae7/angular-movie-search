export default class SearchController {

  constructor($scope, apiService) {
    this.movies = [];
    this.$scope = $scope;
    this._apiService = apiService;
  }

  search() {
    this._apiService.getMovies(this.searchString)
      .then((movies) => {
        this.movies = movies;
        this.$scope.$digest();
      });
  }
}

SearchController.$inject = ['$scope'];
SearchController.$inject = ['apiService'];
