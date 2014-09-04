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
      updateCart: updateCart
    };
  }]);
