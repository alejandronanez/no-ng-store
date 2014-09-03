'use strict';

describe('Service: storesFactory', function () {

  // load the service's module
  beforeEach(module('gapStoreApp'));

  // instantiate service
  var storesFactory;
  beforeEach(inject(function (_storesFactory_) {
    storesFactory = _storesFactory_;
  }));

  it('should do something', function () {
    expect(!!storesFactory).toBe(true);
  });

});
