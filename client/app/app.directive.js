import './app.styl';
import template from './app.html';
import {AppController as controller} from './app.controller';

export const appDirective = () => {
  return {
    // ES6 object destructuring
    template,
    controller,
    // using vm per John Papa
    controllerAs: 'vm',
    restrict: 'E',
    scope: {},
    replace: true
  };
};