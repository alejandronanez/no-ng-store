'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ShoppingCartProductsCtrl
 * @description
 * # ShoppingCartProductsCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ShoppingCartProductsCtrl', ['$scope', '$routeParams', 'storesFactory', 'shoppingCartFactory', '$location', function ($scope, $routeParams, storesFactory, shoppingCartFactory, $location) {
    var promisse = storesFactory.getProduct($routeParams['store_id'], $routeParams['id']),
        promisseStore = storesFactory.getStore($routeParams['store_id']);

    promisse.then(function (data) {
      $scope.product = data;
    });

    promisseStore.then(function (data) {
      $scope.store = data;
    });

    $scope.addToCart = function (product) {
      if ($scope.cartAdd.$valid) {
        var cartData = {},
            productPromisse;
        // update products
        $scope.product['total_in_shelf'] -= $scope.total_bought;
        productPromisse = storesFactory.updateProduct({
          'store_id': parseInt($routeParams['store_id']),
          'id': parseInt($routeParams['id']),
        }, $scope.product);

        productPromisse.then(function () {
          // update cart
          cartData['id'] = parseInt($routeParams['id']);
          cartData['store_id'] = parseInt($routeParams['store_id']);
          cartData['qty'] = $scope.total_bought;
          shoppingCartFactory.updateCart(cartData);
          $location.path('/shopping-cart/my-cart/');
        });

      }
    }

  }]);
