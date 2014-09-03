'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ProductsEditCtrl
 * @description
 * # ProductsEditCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ProductsEditCtrl', function ($scope, storesFactory, $routeParams, $location) {
    $scope.product = storesFactory.getProduct($routeParams.store_id, $routeParams.id);

    $scope.update = function () {
      if ($scope.product.form.$valid) {
        
        var data = storesFactory.updateProduct({
          id: $routeParams.id,
          store_id: $routeParams.store_id
        }, {
          name: $scope.product.name,
          description: $scope.product.description,
          price: $scope.product.price,
          total_in_shelf: $scope.product.total_in_shelf,
          total_in_vault: $scope.product.total_in_vault
        });

        $location.path('/products/' + $routeParams.store_id);
      }
    };


  });
