'use strict';

describe('Controller: StoresNewCtrl', function () {

  // load the controller's module
  beforeEach(module('gapStoreApp'));

  var StoreNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoreNewCtrl = $controller('StoresNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
