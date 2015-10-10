'use strict';

/**
 * @ngdoc overview
 * @name lfgApp
 * @description
 * # lfgApp
 *
 * Main module of the application.
 */
angular
  .module('lfgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/gaming', {
        templateUrl: 'views/gaming.html',
        controller: 'GamingCtrl',
        controllerAs: 'gaming'
      })
      .when('/cowork', {
        templateUrl: 'views/cowork.html',
        controller: 'CoworkCtrl',
        controllerAs: 'cowork'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
    .when('/community', {
        templateUrl: 'views/community.html',
        controller: 'CommunityCtrl',
        controllerAs: 'community'
      })
    .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/kickstarter', {
        templateUrl: 'views/kickstarter.html',
        controller: 'KickstarterCtrl',
        controllerAs: 'kickstarter'
      })      .otherwise({
        redirectTo: '/'
      });
  });
