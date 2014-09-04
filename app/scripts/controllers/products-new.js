'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ProductsNewCtrl
 * @description
 * # ProductsNewCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ProductsNewCtrl', ['$scope', 'storesFactory', '$location', '$routeParams', function ($scope, storesFactory, $location, $routeParams) {

    if (!$routeParams['store_id']) {
      $location.path('/');
    }
    
    var storeId = parseInt($routeParams['store_id']),
        promisse =  storesFactory.getStore(storeId);

    promisse.then(function (data) {
      $scope.store = data;
      
      if (!$scope.store) {
        $location.path('/');
      }
    });
    
    /**
     * Create a new product
     */
    $scope.create = function () {
      if ($scope.createProduct.$valid) {
        var promisse = storesFactory.createProduct({
          name: $scope.name,
          description: $scope.description,
          price: $scope.price,
          total_in_shelf: $scope.total_in_shelf,
          total_in_vault: $scope.total_in_vault,
          store_id: storeId
        });

        promisse.then(function () { $location.path('/stores/' + storeId); });
      }
    };
  }]);
