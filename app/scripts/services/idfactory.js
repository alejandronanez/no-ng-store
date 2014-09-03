'use strict';

/**
 * @ngdoc service
 * @name gapStoreApp.idFactory
 * @description
 * # idFactory
 * Factory in the gapStoreApp.
 * Generates an ID for each record saved in localstorage
 */
angular.module('gapStoreApp')
  .factory('idFactory', function ($cookieStore) {
    return {
      getId: function () {
        return new Date().getUTCMilliseconds();
      }
    };
  });
