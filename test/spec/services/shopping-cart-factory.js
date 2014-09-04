'use strict';

describe('Service: shoppingCartFactory', function () {

  // load the service's module
  beforeEach(module('gapStoreApp'));

  // instantiate service
  var shoppingCartFactory;
  beforeEach(inject(function (_shoppingCartFactory_) {
    shoppingCartFactory = _shoppingCartFactory_;
  }));

  it('should do something', function () {
    expect(!!shoppingCartFactory).toBe(true);
  });

});
