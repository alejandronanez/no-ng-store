'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ShoppingCartStoresCtrl
 * @description
 * # ShoppingCartStoresCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ShoppingCartStoresCtrl', ['$scope', '$routeParams', 'storesFactory', function ($scope, $routeParams, storesFactory) {
    var promisse = storesFactory.getStore($routeParams['id']);
    promisse.then(function (data) {
      $scope.store = data;
    });
  }]);
