'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:ProductsEditCtrl
 * @description
 * # ProductsEditCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('ProductsEditCtrl', ['$scope', 'storesFactory', '$routeParams', '$location', function ($scope, storesFactory, $routeParams, $location) {
    var promisse = storesFactory.getProduct($routeParams.store_id, $routeParams.id);
    
    promisse.then(function (data) {
      $scope.product = data;
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

    $scope.update = function () {
      if ($scope.editProduct.$valid) {
        var promisse = storesFactory.updateProduct({
            id: $routeParams.id,
            store_id: $routeParams.store_id
          }, {
            name: $scope.product.name,
            description: $scope.product.description,
            price: $scope.product.price,
            total_in_shelf: $scope.product.total_in_shelf,
            total_in_vault: $scope.product.total_in_vault,
            image: $scope.product.image
          });
      
      promisse.then(function () {
        $location.path('/stores/' + $routeParams.store_id);
      });

      }
    };


  }]);
