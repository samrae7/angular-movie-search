import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'

import routing from './app.config';
import routes from './app.routes';
import '../style/app.css';

import search from './search/search.controller';
import api from './services/apiService/api.service';


const MODULE_NAME = 'app';

export default angular.module(MODULE_NAME, [uirouter, api, search])
  .config(routing)
  .config(routes)
  .name;

