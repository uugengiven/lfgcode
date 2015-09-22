'use strict';

describe('Controller: UsCtrl', function () {

  // load the controller's module
  beforeEach(module('lfgApp'));

  var UsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsCtrl = $controller('UsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsCtrl.awesomeThings.length).toBe(3);
  });
});
