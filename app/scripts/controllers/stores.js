'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoresCtrl
 * @description
 * # StoresCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoresCtrl', ['$scope', 'storesFactory', function ($scope, storesFactory) {
    
    var promisse = storesFactory.getStores();

    promisse.then(function (data) { $scope.stores = data; });

    $scope.delete = function (store) {
      if ( confirm('Would you like to delete the store: ' + store.name + '?') ) {
      	$scope.stores.splice($scope.stores.indexOf(store), 1);
      	storesFactory.updateStores($scope.stores);
      }
    };

  }]);
