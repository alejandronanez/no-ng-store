'use strict';

/**
 * @ngdoc service
 * @name gapStoreApp.shoppingCartFactory
 * @description
 * # shoppingCartFactory
 * Factory in the gapStoreApp.
 */
angular.module('gapStoreApp')
  .factory('shoppingCartFactory', ['localstorageFactory', function (localstorageFactory) {

        /**
         * Get all stores with their data
         * @return {Array} [description]
         */
    var getAllProducts = function () {
          return localstorageFactory.get('stores');
        };

    // Public API here
    return {
      getAllProducts: getAllProducts
    };
  }]);
