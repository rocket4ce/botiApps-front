'use strict';

describe('Service: botiFactory', function () {

  // load the service's module
  beforeEach(module('botiAppApp'));

  // instantiate service
  var botiFactory;
  beforeEach(inject(function (_botiFactory_) {
    botiFactory = _botiFactory_;
  }));

  it('should do something', function () {
    expect(!!botiFactory).toBe(true);
  });

});
