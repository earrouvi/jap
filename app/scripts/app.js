'use strict';

angular.module('japApp', [
  'ngRoute',
  'controllers',
  'services',
  'directives'
])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	    .when('/', {
	        templateUrl: '../../../jap/app/views/yomu.html',
	        controller: 'YomuCtrl'
	    }).when('/wakaru', {
	        templateUrl: '../../../jap/app/views/wakaru.html',
	        controller: 'WakaruCtrl'
	    }).when('/yomu', {
	        templateUrl: '../../../jap/app/views/yomu.html',
	        controller: 'YomuCtrl'
	    }).when('/kaku', {
	        templateUrl: '../../../jap/app/views/kaku.html',
	        controller: 'KakuCtrl'
	    }).when('/kanji', {
	        templateUrl: '../../../jap/app/views/kanji.html',
	        controller: 'KanjiCtrl'
	    }).otherwise({
	      	redirectTo: '/'
	    });
}]);

angular.module('controllers', []);
angular.module('services', []);
angular.module('directives', []);