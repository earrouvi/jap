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
	        templateUrl: '../../../jap/app/views/what.html',
	        controller: 'WhatCtrl'
	    }).when('/what', {
	        templateUrl: '../../../jap/app/views/what.html',
	        controller: 'WhatCtrl'
	    }).when('/news', {
	        templateUrl: '../../../jap/app/views/news.html',
	        controller: 'NewsCtrl'
	    }).when('/fanfrale', {
	        templateUrl: '../../../jap/app/views/fanfrale.html',
	        controller: 'FanfraleCtrl'
	    }).when('/contact', {
	        templateUrl: '../../../jap/app/views/contact.html',
	        controller: 'ContactCtrl'
	    })
	    .otherwise({
	      redirectTo: '/'
	    });
}]);

angular.module('controllers', []);
angular.module('services', []);
angular.module('directives', []);