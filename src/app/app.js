import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'

import routing from './app.config';
import routes from './app.routes';
import '../style/app.css';

import ApiService from './services/apiService/api.service';
import SearchController from './search/search.controller';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter])
  .config(routing)
  .config(routes)
  .service('apiService', ApiService)
  .controller('SearchController', SearchController);

export default MODULE_NAME;
