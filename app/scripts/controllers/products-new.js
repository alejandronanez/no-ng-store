'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ProductsNewCtrl
 * @description
 * # ProductsNewCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ProductsNewCtrl', function ($scope, storesFactory, $location) {
    
    var storeId = 0;

    /**
     * Check if the Store Id has been set from the previous route
     */
    $scope.$on('$routeChangeSuccess', function (e, current, pre) {
      if (!storesFactory.getStoreId()) {
        $location.path('/');
      } else {
        storeId = storesFactory.getStoreId();
      }
    });

    $scope.store = storesFactory.getStore(storeId);

    /**
     * Create a new product
     */
    $scope.create = function () {
      if ($scope.product.form.$valid) {
        var data = storesFactory.createProduct({
          name: $scope.product.name,
          description: $scope.product.description,
          price: $scope.product.price,
          total_in_shelf: $scope.product.total_in_shelf,
          total_in_vault: $scope.product.total_in_vault,
          store_id: storeId
        });

        $location.path('/stores/' + storeId);
      }
    };



  });
