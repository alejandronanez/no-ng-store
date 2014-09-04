'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoreEditCtrl
 * @description
 * # StoreEditCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoresEditCtrl', ['$scope', '$routeParams', 'storesFactory', '$location', function ($scope, $routeParams, storesFactory, $location) {

    var storeId = parseInt($routeParams['id']),
        promisse =  storesFactory.getStore(storeId);

    promisse.then(function (data) {
      $scope.store = data;
    });

    $scope.update = function () {
      if ($scope.editStore.$valid) {
        var promisse = storesFactory.updateStore(storeId, {
            name: $scope.store.name,
            address: $scope.store.address
          });

        promisse.then(function () {
          $location.path('/stores');  
        });
        
      }
    };

  }]);
