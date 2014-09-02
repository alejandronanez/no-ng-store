'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
