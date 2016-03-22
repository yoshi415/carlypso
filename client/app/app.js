import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import {appDirective} from './app.directive';
import {api} from './components/api/api';
import {listings} from './components/listings/listings';

angular.module('app', [
  uiRouter,
  ngAnimate,
  listings.name,
  api.name
])
.directive('app', appDirective)