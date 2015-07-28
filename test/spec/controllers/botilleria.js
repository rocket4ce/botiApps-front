'use strict';

describe('Controller: BotilleriaCtrl', function () {

  // load the controller's module
  beforeEach(module('botiAppApp'));

  var BotilleriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BotilleriaCtrl = $controller('BotilleriaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
