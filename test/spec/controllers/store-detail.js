'use strict';

describe('Controller: StoreDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('gapStoreApp'));

  var StoreDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoreDetailCtrl = $controller('StoreDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
