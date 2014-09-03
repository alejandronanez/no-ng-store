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
        redirectTo: '/shopping-cart'
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
      .when('/stores/:id', {
        templateUrl: 'views/admin/store-detail.html',
        controller: 'StoreDetailCtrl'
      })
      .when('/stores/:store_id/products/new', {
        templateUrl: 'views/admin/products-new.html',
        controller: 'ProductsNewCtrl'
      })
      .when('/stores/:store_id/products/:id/edit', {
        templateUrl: 'views/admin/products-edit.html',
        controller: 'ProductsEditCtrl'
      })
      .when('/stores/:store_id/products/:id', {
        templateUrl: 'views/admin/product-detail.html',
        controller: 'ProductDetailCtrl'
      })
      .when('/testing', {
        templateUrl: 'views/testing.html',
        controller: 'TestingCtrl'
      })
      .when('/shopping-cart', {
        templateUrl: 'views/public/shopping-cart.html',
        controller: 'ShoppingCartCtrl'
      })
      .when('/shopping-cart/stores/:id', {
        templateUrl: 'views/public/shopping-cart-stores.html',
        controller: 'ShoppingCartStoresCtrl'
      })
      .when('/shopping-cart/stores/:store_id/products/:id', {
        templateUrl: 'views/public/shopping-cart-products.html',
        controller: 'ShoppingCartProductsCtrl'
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

