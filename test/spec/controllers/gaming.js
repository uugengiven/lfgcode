'use strict';

describe('Controller: GamingCtrl', function () {

  // load the controller's module
  beforeEach(module('lfgApp'));

  var GamingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamingCtrl = $controller('GamingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GamingCtrl.awesomeThings.length).toBe(3);
  });
});
