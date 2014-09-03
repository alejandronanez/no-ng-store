'use strict';

describe('Controller: StoresEditCtrl', function () {

  // load the controller's module
  beforeEach(module('gapStoreApp'));

  var StoreEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoreEditCtrl = $controller('StoresEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
