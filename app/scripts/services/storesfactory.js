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

    var storeId;

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
        createProduct = function (data) {
          var currentValue = [],
              recordIndex = 0,
              currentProducts = [];

          if ( localstorageFactory.get('stores') && localstorageFactory.get('stores') instanceof Array ) {
            currentValue = localstorageFactory.get('stores');
          }

          data['id'] = idFactory.getId();

          // Get Record index
          recordIndex = findRecord(data['store_id'], currentValue);
          // Store new products
          currentValue[recordIndex]['products'].push(data);

          return localstorageFactory.set('stores', currentValue);
        },
        /**
         * Return a record from the 'id' localstorage
         * @param  {String} id         Id to compare
         * @param  {Array} actualData  Array with all records
         * @param  {String} key        Alternate key
         * @return {Number}            The indexof the element in the actualData array
         */
        findRecord = function (id, actualData, key) {
          var key = key || 'id';
          for (var i in actualData) {
            if (actualData[i][key] == id) {
              return actualData.indexOf(actualData[i]);
            }
          }
        },
        getProduct = function (store_id, product_id) {
          var actualData = localstorageFactory.get('stores'),
              store = actualData[findRecord(store_id, actualData)];

              return store['products'][findRecord(product_id, store['products'], 'id')];
        },
        /**
         * Return store id
         * @return {Number} Store ID
         */
        getStoreId = function () {
          return storeId;
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
         * Set storeId
         * @param {Number} value New value for storeId
         */
        setStoreId = function (value) {
          storeId = value;
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
         * Do update on the product
         * @param  {String} key  Element key
         * @param  {Array} data  Element data to be updated
         */
        updateProduct = function (keys, data) {
          var actualData = localstorageFactory.get('stores'),
              store = actualData[findRecord(keys['store_id'], actualData)],
              productIndex = store['products'].indexOf(store['products'][findRecord(keys['id'], store['products'], 'id')]),
              recordIndex = findRecord(keys['store_id'], actualData);

          actualData[recordIndex]['products'][productIndex]['name'] = data['name'];
          actualData[recordIndex]['products'][productIndex]['description'] = data['description'];
          actualData[recordIndex]['products'][productIndex]['price'] = data['price'];
          actualData[recordIndex]['products'][productIndex]['total_in_shelf'] = data['total_in_shelf'];
          actualData[recordIndex]['products'][productIndex]['total_in_vault'] = data['total_in_vault'];
          localstorageFactory.set('stores', actualData);
        };

    // Public API here
    return {
      createStore: createStore,
      createProduct: createProduct,
      getProduct: getProduct,
      getStore: getStore,
      getStoreId: getStoreId,
      setStoreId: setStoreId,
      updateStore: updateStore,
      updateProduct: updateProduct
    };

  });
