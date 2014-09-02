'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoreEditCtrl
 * @description
 * # StoreEditCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoresEditCtrl', function ($scope) {
    $scope.store = {
      'id': 1,
      'name': 'Main store',
      'address': 'Main street #1234'
    }; 
  });
