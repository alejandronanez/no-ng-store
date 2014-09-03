'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ShoppingCartProductsCtrl
 * @description
 * # ShoppingCartProductsCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ShoppingCartProductsCtrl', ['$scope', '$routeParams', 'storesFactory', function ($scope, $routeParams, storesFactory) {
    $scope.product = storesFactory.getProduct($routeParams['store_id'], $routeParams['id']);
    $scope.store = storesFactory.getStore($routeParams['store_id']);
  }]);
