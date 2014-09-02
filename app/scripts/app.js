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
      .when('/stores/1/edit', {
        templateUrl: 'views/admin/stores-edit.html',
      })
      .when('/stores/1', {
        templateUrl: 'views/admin/store-detail.html',
      })
      .when('/products/new', {
        templateUrl: 'views/admin/products-new.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
