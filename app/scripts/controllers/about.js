'use strict';

/**
 * @ngdoc function
 * @name gapStoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gapStoreApp
 */
angular.module('gapStoreApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
