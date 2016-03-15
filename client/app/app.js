import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router'
import {appDirective} from './app.directive';
import {api} from './components/api/api';
import {listings} from './components/listings/listings';
import {search} from './components/search/search';

angular.module('app', [
  uiRouter,
  listings.name,
  api.name,
  search.name
])
.directive('app', appDirective);