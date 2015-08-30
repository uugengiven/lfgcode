'use strict';

/**
 * @ngdoc function
 * @name lfgApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the lfgApp
 */
angular.module('lfgApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    this.info = "info";
    //$scope.isActive = function (viewLocation) { 
    //    return viewLocation === $location.path();
    //};
    $scope.isActive = function (viewLocation) { 
        $scope.viewLocation = viewLocation;
        $scope.stuff = $location.url();
        return viewLocation === $location.url();
    };
    
  });
