'use strict';

describe('Controller: ShoppingCartStoresCtrl', function () {

  // load the controller's module
  beforeEach(module('gapStoreApp'));

  var ShoppingCartStoresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoppingCartStoresCtrl = $controller('ShoppingCartStoresCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
