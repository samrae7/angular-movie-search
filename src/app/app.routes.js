routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('search', {
      url: '/',
      template: require('./search/search.html'),
      controller: 'SearchController',
      controllerAs: 'vm'
    })
}
