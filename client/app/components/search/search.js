import angular from 'angular';
import {searchDirective} from './search.directive';

export const search = angular.module('search', [])
.directive('search', searchDirective);