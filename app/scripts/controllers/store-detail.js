'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoreDetailCtrl
 * @description
 * # StoreDetailCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoreDetailCtrl', function ($scope, $routeParams, storesFactory) {

    var storeId = $routeParams['id'];
    $scope.store = storesFactory.getStore(storeId);
    $scope.products = storesFactory.getProducts(storeId);

    $scope.delete = function (product) {
      confirm('Would you like to delete ' + store.name + '?');
    };

  });
