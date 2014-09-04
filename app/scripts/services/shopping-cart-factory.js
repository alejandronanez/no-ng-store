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
        },
        /**
         * Get cart array
         * @return {Array} Cart items
         */
        getCart = function () {
          return localstorageFactory.get('cart');
        },
        /**
         * Get the cart for checkout
         * @return {[type]} [description]
         */
        getCartCheckout = function () {
          var cart = getCart(),
              finalArray = [],
              result = [],
              products = getAllProducts();

          // get all products
          _.each(products, function (element, index, list) {
            _.each(element['products'], function (element2, index2, list2) {
              result.push(element2);
            });
          });

          // Get all products on cart
          _.each(cart, function (element) {
            finalArray.push( _.extend(element, _.where(result, { 'id': parseInt(element['id']), 'store_id': element['store_id'] }) ) );
          });

          return finalArray;
        },
        /**
         * Update the cart
         * @param  {Object} data Data from the from with the qty of the element
         */
        updateCart = function (data) {
          var cart = [],
              tempCart = {},
              index = 0;

          if ( localstorageFactory.get('cart') && localstorageFactory.get('cart') instanceof Array ) {
            cart = localstorageFactory.get('cart');
          }
          // find the existing === data if any inside the 'cart' storage
          tempCart = _.find(cart, function (element, tempIndex) {
            if (element.id == data.id) {
              index = tempIndex;
              return element.id == data.id;
            }
          });

          if (tempCart) {
            // Update qty
            tempCart['qty'] += data['qty'];
            cart[index] = tempCart;
          } else {
            cart.push(data);
          }

          localstorageFactory.set('cart', cart);
        };

    // Public API here
    return {
      getAllProducts: getAllProducts,
      getCartCheckout: getCartCheckout,
      updateCart: updateCart
    };
  }]);
