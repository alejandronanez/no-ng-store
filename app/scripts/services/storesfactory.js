'use strict';

/**
 * @ngdoc service
 * @name gapStoreApp.storesFactory
 * @description
 * # storesFactory
 * Factory in the gapStoreApp.
 */
angular.module('gapStoreApp')
  .factory('storesFactory', function (localstorageFactory, idFactory) {

    var createStore = function (data) {
          var currentValue = [];

          if ( localstorageFactory.get('stores') && localstorageFactory.get('stores') instanceof Array ) {
            currentValue = localstorageFactory.get('stores');
          }

          data['id'] = idFactory.getId();
          data['products'] = [];
          currentValue.push(data);
          return localstorageFactory.set('stores', currentValue);
        },
        updateStore = function () {

        };

    // Public API here
    return {
      createStore: createStore,
      updateStore: updateStore
    };
    
  });
