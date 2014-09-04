'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoreNewCtrl
 * @description
 * # StoreNewCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoresNewCtrl', ['$scope', 'storesFactory', '$location', function ($scope, storesFactory, $location) {
    
    /**
     * Create a store in localstorage
     */
    $scope.create = function () {
      if ($scope.createStore.$valid) {
        var promisse = storesFactory.createStore({
              name: $scope.name,
              address: $scope.address
            });

        promisse.then(function () {
          $location.path('/');
        });
      }
    };

  }]);
