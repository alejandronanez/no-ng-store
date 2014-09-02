'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoresCtrl
 * @description
 * # StoresCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoresCtrl', function ($scope) {
    
    $scope.stores = [
      {
        'id': 1,
        'name': 'Main store',
        'address': 'Main street #1234'
      },
      {
        'id': 2,
        'name': 'Store # 2',
        'address': 'The second store address'
      },
      {
        'id': 3,
        'name': 'Another impresive store',
        'address': 'C.C. Andino'
      },
      {
        'id': 4,
        'name': 'This is the fourth store',
        'address': 'Premium plaza'
      },
      {
        'id': 5,
        'name': 'The last store in town',
        'address': 'On the last street of town'
      },
    ];

    $scope.delete = function (store) {
      confirm('Would you like to delete ' + store.name + '?');
    };

  });
