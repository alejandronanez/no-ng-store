'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ShoppingCartProductsCtrl
 * @description
 * # ShoppingCartProductsCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ShoppingCartProductsCtrl', ['$scope', '$routeParams', 'storesFactory', 'shoppingCartFactory', function ($scope, $routeParams, storesFactory, shoppingCartFactory) {
    $scope.product = storesFactory.getProduct($routeParams['store_id'], $routeParams['id']);
    $scope.store = storesFactory.getStore($routeParams['store_id']);

    $scope.addToCart = function (product) {
      if ($scope.cart.buy.$valid) {
        var cartData = {};

        // update products
        $scope.product['total_in_shelf'] -= $scope.total_bought;
        storesFactory.updateProduct({
          'store_id': $routeParams['store_id'],
          'id': $routeParams['id'],
        }, $scope.product);

        // update cart
        cartData['id'] = $routeParams['id'];
        cartData['store_id'] = $routeParams['store_id'];
        cartData['qty'] = $scope.total_bought;

        shoppingCartFactory.updateCart(cartData);
      }
    }

  }]);
