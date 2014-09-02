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
        var consecutiveId = $cookieStore.get('consecutiveId') || 0;
        $cookieStore.put('consecutiveId', consecutiveId + 1);
        return $cookieStore.get('consecutiveId');
      }
    };
  });
