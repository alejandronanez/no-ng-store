'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ShoppingCartCtrl
 * @description
 * # ShoppingCartCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ShoppingCartCtrl', ['$scope', 'shoppingCartFactory', function ($scope, shoppingCartFactory) {

    $scope.stores = shoppingCartFactory.getAllProducts();

  }]);
