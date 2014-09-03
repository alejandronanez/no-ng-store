'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ProductDetailCtrl
 * @description
 * # ProductDetailCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ProductDetailCtrl', function ($scope, storesFactory, $routeParams) {
    $scope.product = storesFactory.getProduct($routeParams.store_id, $routeParams.id);
  });
