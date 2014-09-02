'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoreNewCtrl
 * @description
 * # StoreNewCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoresNewCtrl', function ($scope, localstorageFactory, storesFactory, idFactory) {
    
    /**
     * Create a store in localstorage
     */
    $scope.create = function () {
      if ($scope.store.form.$valid) {
        var data = storesFactory.createStore({
              name: $scope.store.name,
              address: $scope.store.address
            });
        console.log( localstorageFactory.set('stores', data) );
      }
    };

  });
