'use strict';

angular.module('controllers')
	.controller('KanjiCtrl', ['$scope', '$http', '$routeParams', '$location', '$window', function ($scope, $http, $routeParams, $location, $window) {
		$scope.init = function() {
			$scope.kotae1 = [
				{ kanji: "本", kana: "ほん" },
				{ kanji: "気", kana: "き" },
				{ kanji: "水", kana: "みず" },
				{ kanji: "木", kana: "き" },
				{ kanji: "女", kana: "おんな" }
			];
			$scope.kotae2 = [
				{ kanji: "先生", kana: "せんせい" }, 
				{ kanji: "毎日", kana: "まいにち" }, 
				{ kanji: "学生", kana: "がくせい" }, 
				{ kanji: "空手", kana: "からて" }, 
				{ kanji: "男の人", kana: "おとこのひと" }
			];
			$scope.kotae3 = [
				{ kanji: "十二月", kana: "じゅうにがつ" }, 
				{ kanji: "木曜日", kana: "もくようび" }, 
				{ kanji: "", kana: "のみもの" }, 
				{ kanji: "", kana: "ほん" }
			];
		};
		$scope.init();
	}]);