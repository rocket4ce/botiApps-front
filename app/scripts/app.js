'use strict';

/**
 * @ngdoc overview
 * @name botiAppApp
 * @description
 * # botiAppApp
 *
 * Main module of the application.
 */
angular
  .module('botiAppApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/botilleria', {
        templateUrl: 'views/botilleria.html',
        controller: 'BotilleriaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
