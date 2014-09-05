'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ProductsNewCtrl
 * @description
 * # ProductsNewCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ProductsNewCtrl', ['$scope', 'storesFactory', '$location', '$routeParams', function ($scope, storesFactory, $location, $routeParams) {

    if (!$routeParams['store_id']) {
      $location.path('/admin/stores');
    }
    
    var storeId = parseInt($routeParams['store_id']),
        promisse =  storesFactory.getStore(storeId);

    promisse.then(function (data) {
      $scope.store = data;
      
      if (!$scope.store) {
        $location.path('/admin/stores');
      }
    });

    $scope.images = [
      {
        id: 0,
        name: 'Converse',
        images: [
          '/images/shoes-converse-1.jpg',
          '/images/shoes-converse-2.jpg',
          '/images/shoes-converse-3.jpg'
        ]
      },
      {
        id: 1,
        name: 'Pink Heels',
        images: [
          '/images/shoes-pink-heels-1.jpg',
          '/images/shoes-pink-heels-2.jpg',
          '/images/shoes-pink-heels-3.jpg'
        ]
      },
      {
        id: 2,
        name: 'Gold heels',
        images: [
          '/images/shoes-gold-heels-1.jpg',
          '/images/shoes-gold-heels-2.jpg',
          '/images/shoes-gold-heels-3.jpg'
        ]
      }
    ];
    
    /**
     * Create a new product
     */
    $scope.create = function () {
      if ($scope.createProduct.$valid) {
        var promisse = storesFactory.createProduct({
          name: $scope.name,
          description: $scope.description,
          price: $scope.price,
          total_in_shelf: $scope.total_in_shelf,
          total_in_vault: $scope.total_in_vault,
          image: $scope.image,
          store_id: storeId
        });

        promisse.then(function () {
          $location.path('/admin/stores/' + storeId);
        });
      }
    };
  }]);
