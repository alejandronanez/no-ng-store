'use strict';

describe('Service: idFactory', function () {

  // load the service's module
  beforeEach(module('gapStoreApp'));

  // instantiate service
  var idFactory;
  beforeEach(inject(function (_idFactory_) {
    idFactory = _idFactory_;
  }));

  it('should do something', function () {
    expect(!!idFactory).toBe(true);
  });

});
