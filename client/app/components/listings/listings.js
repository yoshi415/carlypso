import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {listingsDirective} from './listings.directive';

export const listings = angular.module('listings', [uiRouter])
.config(function($stateProvider) {
  $stateProvider.state('listings', {
    url: '/listings',
    template: '<listings></listings>'
  });
})
.directive('listings', listingsDirective);