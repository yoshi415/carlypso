import './listings.styl';
import template from './listings.html';
import {ListingsController as controller} from './listings.controller';

export const listingsDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    replace: true
  };
};