'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:TestingCtrl
 * @description
 * # TestingCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('TestingCtrl', function ($scope, localstorageFactory) {
    $scope.testing = 'a';
  });
