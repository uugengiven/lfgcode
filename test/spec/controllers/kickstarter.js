'use strict';

describe('Controller: KickstarterCtrl', function () {

  // load the controller's module
  beforeEach(module('lfgApp'));

  var KickstarterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KickstarterCtrl = $controller('KickstarterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KickstarterCtrl.awesomeThings.length).toBe(3);
  });
});
