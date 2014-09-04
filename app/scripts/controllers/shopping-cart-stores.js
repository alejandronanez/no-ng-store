'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ShoppingCartStoresCtrl
 * @description
 * # ShoppingCartStoresCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ShoppingCartStoresCtrl', ['$scope', '$routeParams', 'storesFactory', function ($scope, $routeParams, storesFactory) {
    $scope.store = storesFactory.getStore($routeParams['id']);
  }]);
