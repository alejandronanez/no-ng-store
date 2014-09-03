'use strict';

describe('Controller: ShoppingCartProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('gapStoreApp'));

  var ShoppingCartProductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoppingCartProductsCtrl = $controller('ShoppingCartProductsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
