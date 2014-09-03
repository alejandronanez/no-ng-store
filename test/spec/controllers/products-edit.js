'use strict';

describe('Controller: ProductsEditCtrl', function () {

  // load the controller's module
  beforeEach(module('gapStoreApp'));

  var ProductsEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsEditCtrl = $controller('ProductsEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
