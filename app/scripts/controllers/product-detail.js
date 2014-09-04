'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ProductDetailCtrl
 * @description
 * # ProductDetailCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ProductDetailCtrl', ['$scope', 'storesFactory', '$routeParams', function ($scope, storesFactory, $routeParams) {
    var promisse = storesFactory.getProduct($routeParams.store_id, $routeParams.id);
    
    promisse.then(function (data) {
      $scope.product = data;
    });

  }]);
