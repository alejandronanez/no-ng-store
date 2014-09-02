'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoresCtrl
 * @description
 * # StoresCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoresCtrl', function ($scope, localstorageFactory) {
    
    $scope.stores = localstorageFactory.get('stores');

    $scope.delete = function (store) {
      confirm('Would you like to delete ' + store.name + '?');
    };

  });
