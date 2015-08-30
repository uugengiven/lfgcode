'use strict';

/**
 * @ngdoc function
 * @name lfgApp.controller:KickstarterCtrl
 * @description
 * # KickstarterCtrl
 * Controller of the lfgApp
 */
angular.module('lfgApp')
  .controller('KickstarterCtrl', function ($scope) {
    this.twitterLink = false;
    this.facebookLink = false;
    this.kickstarterLink = false;
    $scope.header = "Kickstarter";
  });