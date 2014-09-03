'use strict';

describe('Controller: ShoppingCartCtrl', function () {

  // load the controller's module
  beforeEach(module('gapStoreApp'));

  var ShoppingCartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoppingCartCtrl = $controller('ShoppingCartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
