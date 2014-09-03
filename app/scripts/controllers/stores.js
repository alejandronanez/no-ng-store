'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoresCtrl
 * @description
 * # StoresCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoresCtrl', function ($scope, storesFactory) {
    
    $scope.stores = storesFactory.getStores();

    $scope.delete = function (store) {
      if ( confirm('Would you like to delete the store: ' + store.name + '?') ) {
      	$scope.stores.splice($scope.stores.indexOf(store), 1);
      	storesFactory.updateStores($scope.stores);
      }
    };

  });
