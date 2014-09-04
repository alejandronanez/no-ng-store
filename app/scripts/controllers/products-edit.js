'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ProductsEditCtrl
 * @description
 * # ProductsEditCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ProductsEditCtrl', ['$scope', 'storesFactory', '$routeParams', '$location', function ($scope, storesFactory, $routeParams, $location) {
    var promisse = storesFactory.getProduct($routeParams.store_id, $routeParams.id);
    
    promisse.then(function (data) {
      $scope.product = data;
    });

    $scope.update = function () {
      if ($scope.productForm.$valid) {
        var promisse = storesFactory.updateProduct({
            id: $routeParams.id,
            store_id: $routeParams.store_id
          }, {
            name: $scope.product.name,
            description: $scope.product.description,
            price: $scope.product.price,
            total_in_shelf: $scope.product.total_in_shelf,
            total_in_vault: $scope.product.total_in_vault
          });
      
      promisse.then(function () {
        $location.path('/stores/' + $routeParams.store_id);
      });

      }
    };


  }]);
