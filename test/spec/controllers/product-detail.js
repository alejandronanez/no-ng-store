'use strict';

describe('Controller: ProductDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('gapStoreApp'));

  var ProductDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductDetailCtrl = $controller('ProductDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
