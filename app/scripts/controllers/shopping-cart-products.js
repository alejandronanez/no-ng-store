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
    var promisse = storesFactory.getProduct($routeParams['store_id'], $routeParams['id']),
        promisseStore = storesFactory.getStore($routeParams['store_id']);

    promisse.then(function (data) {
      $scope.product = data;
    });

    promisseStore.then(function (data) {
      $scope.store = data;
    })

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
