import angular from 'angular';
import {apiFactory} from './api.factory';

export const api = angular.module('api', [])
.constant('URL', 'http://localhost:5000')
.factory('API', apiFactory);