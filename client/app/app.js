import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router'
import {appDirective} from './app.directive';
import {api} from './components/api/api';
import {listings} from './components/listings/listings';
import {home} from './components/home/home'

angular.module('app', [
  uiRouter,
  listings.name,
  api.name,
  home.name
])
.directive('app', appDirective);