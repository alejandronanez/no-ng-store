'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoreDetailCtrl
 * @description
 * # StoreDetailCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoreDetailCtrl', function ($scope) {
    $scope.store = {
      'id': 1,
      'name': 'Main store',
      'address': 'Main street #1234'
    }

    $scope.products = [
      {
        'id': 1,
        'name': 'Athletic shoes',
        'description': 'Main street #1234',
        'price': 100,
        'total_in_shelf': 100,
        'total_in_vault': 100
      },
      {
        'id': 2,
        'name': 'Athletic shoes',
        'description': 'Main street #1234',
        'price': 100,
        'total_in_shelf': 100,
        'total_in_vault': 100
      },
      {
        'id': 3,
        'name': 'Athletic shoes',
        'description': 'Main street #1234',
        'price': 100,
        'total_in_shelf': 100,
        'total_in_vault': 100
      },
      {
        'id': 4,
        'name': 'Athletic shoes',
        'description': 'Main street #1234',
        'price': 100,
        'total_in_shelf': 100,
        'total_in_vault': 100
      },
      {
        'id': 5,
        'name': 'Athletic shoes',
        'description': 'Main street #1234',
        'price': 100,
        'total_in_shelf': 100,
        'total_in_vault': 100
      },
    ];

    $scope.delete = function (product) {
      confirm('Would you like to delete ' + store.name + '?');
    };

  });
