'use strict';

/**
 * @ngdoc service
 * @name gapStoreApp.localstorageFactory
 * @description
 * # localstorageFactory
 * Factory in the gapStoreApp.
 */
angular.module('gapStoreApp')
  .factory('localstorageFactory', function () {
    
        /**
         * Get element from localstorage
         * @param  {String} key Element key
         * @return              Element from localstorage
         */
    var getItem = function (key) {
          return store.get(key);
        },
        /**
         * Get all items on localstorage
         * @return {Object} All items on localstorage
         */
        getAllItems = function () {
          return store.getAll();
        },
        /**
         * Remove an element from localstorage
         * @param  {String} key Element key
         */
        removeItem = function (key) {
          store.remove(key);
          return true;
        },
        /**
         * Store an item on localstorage
         * @param  {String} key   Element key
         * @param  {[type]} value Element to store
         * @return {[type]}       The inserted element
         */
        storeItem = function (key, value) {
          store.set(key, value);
          return getItem(key);
        },
        /**
         * Clear localstorage
         * @return {Boolean}
         */
        clear = function () {
          store.clear();
          return true;
        };

    // Public API here
    return {
      clear: clear,
      get: getItem,
      remove: removeItem,
      set: storeItem
    };
  });
