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
      .when('/', {
        redirectTo: '/stores'
      })
      .when('/stores', {
        templateUrl: 'views/admin/stores.html',
        controller: 'StoresCtrl'
      })
      .when('/stores/new', {
        templateUrl: 'views/admin/stores-new.html',
        controller: 'StoresNewCtrl'
      })
      .when('/stores/:id/edit', {
        templateUrl: 'views/admin/stores-edit.html',
        controller: 'StoresEditCtrl'
      })
      .when('/stores/1', {
        templateUrl: 'views/admin/store-detail.html',
        controller: 'StoreDetailCtrl'
      })
      .when('/products/new', {
        templateUrl: 'views/admin/products-new.html',
      })
      .when('/products/1/edit', {
        templateUrl: 'views/admin/products-edit.html',
        controller: 'ProductsEditCtrl'
      })
      .when('/products/1', {
        templateUrl: 'views/admin/product-detail.html',
        controller: 'ProductDetailCtrl'
      })
      .when('/testing', {
        templateUrl: 'views/testing.html',
        controller: 'TestingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/*=============================================
=            BOOTSTRAP APPLICATION            =
=============================================*/

angular.element(document).ready(function () {
  angular.bootstrap(document, ['gapStoreApp']);
});

