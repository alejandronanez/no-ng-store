'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoreDetailCtrl
 * @description
 * # StoreDetailCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoreDetailCtrl', ['$scope', '$routeParams', 'storesFactory', '$location', function ($scope, $routeParams, storesFactory, $location) {

    var storeId = parseInt($routeParams['id']),
        promisse = storesFactory.getStores();
    
    promisse.then(function (data) { $scope.stores = data; });
    
    $scope.store = storesFactory.getStore(storeId);

    $scope.delete = function (product) {
      if (confirm('Would you like to delete ' + product.name + '?') ) {
        $scope.store['products'].splice($scope.store['products'].indexOf(product), 1);
        storesFactory.updateProducts($scope.store['products'], storeId);
      }
    };

  }]);
