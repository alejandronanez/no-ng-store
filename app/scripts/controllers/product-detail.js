'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ProductDetailCtrl
 * @description
 * # ProductDetailCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ProductDetailCtrl', function ($scope) {
    
    $scope.product = {
      'id': 1,
      'name': 'Product name',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sequi numquam, doloribus illum quod totam minus possimus minima, vel ipsa necessitatibus culpa dolorem unde natus ex. Quae ipsa error magnam.',
      'price': 100,
      'total_in_shelf': 100,
      'total_in_vault': 100,
      'store_id': 1
    }

  });
