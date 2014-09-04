'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:MyCartCtrl
 * @description
 * # MyCartCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('MyCartCtrl', ['$scope', 'shoppingCartFactory', function ($scope, shoppingCartFactory) {
    $scope.cartItems = shoppingCartFactory.getCartCheckout();

    /**
     * Get the total to pay
     * @return {Number}
     */
    $scope.getTotal = function () {
      var total = 0;
      for (var i = 0; i < $scope.cartItems.length; i++) {
        var product = $scope.cartItems[i];
        total += (product[0]['price'] * product['qty']);
      }
      return total;
    }
  }]);
