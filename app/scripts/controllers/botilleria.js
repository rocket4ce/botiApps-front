'use strict';

/**
 * @ngdoc function
 * @name botiAppApp.controller:BotilleriaCtrl
 * @description
 * # BotilleriaCtrl
 * Controller of the botiAppApp
 */
angular.module('botiAppApp')
  .controller('BotilleriaCtrl', function ($scope, botiFactory) {
  	
  	$scope.datos = "";

  	$scope.crearBotilleria = function () {

    	botiFactory.save({ store: $scope.datos}, function () {
    		$scope.datos = "";
    	});
    };


  });
