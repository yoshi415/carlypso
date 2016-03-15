import angular from 'angular';
import {apiFactory} from './api.factory';

export const api = angular.module('api', [])
.constant('URL', 'http://localhost:3001')
.factory('API', apiFactory);