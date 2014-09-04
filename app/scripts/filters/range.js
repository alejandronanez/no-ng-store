'use strict';

/**
 * @ngdoc filter
 * @name gapStoreApp.filter:range
 * @function
 * @description
 * # range
 * Filter in the gapStoreApp.
 */
angular.module('gapStoreApp')
  .filter('range', function () {
    return function (input, min, max) {
      min = parseInt(min); //Make string input int
      max = parseInt(max);
      for (var i=min; i<=max; i++)
        input.push(i);
      return input;
    };
  });
