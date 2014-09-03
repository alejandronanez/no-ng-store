'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoreDetailCtrl
 * @description
 * # StoreDetailCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoreDetailCtrl', function ($scope, $routeParams, storesFactory, $location) {

    var storeId = $routeParams['id'];
    $scope.store = storesFactory.getStore(storeId);
    $scope.products = $scope.store['products'];

    $scope.createProduct = function (id) {
      storesFactory.setStoreId(id);
      $location.path('/products/new');
    };

    $scope.delete = function (product) {
      confirm('Would you like to delete ' + store.name + '?');
    };

  });
