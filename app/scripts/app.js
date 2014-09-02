'use strict';

/**
 * @ngdoc overview
 * @name gapStoreApp
 * @description
 * # gapStoreApp
 *
 * Main module of the application.
 */
angular
  .module('gapStoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/stores', {
        templateUrl: 'views/admin/stores.html'
      })
      .when('/stores/new', {
        templateUrl: 'views/admin/stores-new.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
