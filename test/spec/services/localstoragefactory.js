'use strict';

describe('Service: localstorageFactory', function () {

  // load the service's module
  beforeEach(module('gapStoreApp'));

  // instantiate service
  var localstorageFactory;
  beforeEach(inject(function (_localstorageFactory_) {
    localstorageFactory = _localstorageFactory_;
  }));

  it('should do something', function () {
    expect(!!localstorageFactory).toBe(true);
  });

});
