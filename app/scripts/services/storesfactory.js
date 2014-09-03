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
        /**
         * Do update
         * @param  {String} key  Element key
         * @param  {Array} data  Element data to be updated
         */
        updateStore = function (key, data) {
          var actualData = localstorageFactory.get('stores'),
              recordIndex = 0;

          recordIndex = findRecord(key, actualData);
          actualData[recordIndex]['name'] = data['name'];
          actualData[recordIndex]['address'] = data['address'];

          localstorageFactory.set('stores', actualData);
        },
        /**
         * Get individual Store
         * @param  {String} key Element key to be retrieved
         */
        getStore = function (key) {
          var currentValue = [],
              recordIndex = 0,
              actualData = localstorageFactory.get('stores');
          // Find store with the ID
          recordIndex = findRecord(key, actualData);
          return actualData[recordIndex];
        },
        /**
         * Get all products related to a store
         * @param  {String} key Store id
         * @return {Array}      All stores related to the store
         */
        getProducts = function (key) {
          console.log('Getting products...');
        },
        /**
         * Return a record from the 'stores' localstorage
         * @param  {String} id         Id to compare
         * @param  {Array} actualData  Array with all records
         * @return {Number}            The indexof the element in the actualData array
         */
        findRecord = function (id, actualData) {
          for (var i in actualData) {
            if (actualData[i]['id'] == id) {
              return actualData.indexOf(actualData[i]);
            }
          }
        };

    // Public API here
    return {
      createStore: createStore,
      getStore: getStore,
      getProducts: getProducts,
      updateStore: updateStore
    };

  });
