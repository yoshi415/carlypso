import './search.styl';
import template from './search.html';

export const searchDirective = () => {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {
      bindTo: '='
    },
    link($scope) {
      $scope.bindTo = $scope.bindTo || '';
    }
  };
};
