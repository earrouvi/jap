'use strict';

angular.module('controllers')
	.controller('WakaruCtrl', ['$scope', '$http', '$routeParams', '$location', '$window', function ($scope, $http, $routeParams, $location, $window) {
		$scope.init = function() {
			$scope.kotae1 = [{ name: "やさい" }, { name: "えんぴつ" }, { name: "ふく" }, { name: "にく" }, { name: "くるま" }, { name: "のみもの" }, { name: "ほん" }];
		};
		$scope.init();
	}]);