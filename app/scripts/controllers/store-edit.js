'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:StoreEditCtrl
 * @description
 * # StoreEditCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('StoresEditCtrl', function ($scope, $routeParams, storesFactory, $location) {

  	var storeId = $routeParams['id'];
  	$scope.store = storesFactory.getStore(storeId);

  	$scope.update = function () {
  		if ($scope.store.form.$valid) {
  		  var data = storesFactory.updateStore(storeId, {
              name: $scope.store.name,
              address: $scope.store.address
            });
        
        $location.path('/');	
  		}
  	};

  });
