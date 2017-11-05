'use strict';

angular.module('numberConverter')
	.controller( 'numberConverterCtrl', 
		[ '$scope' , 
		function ($scope) {
			$scope.title = "Let's convert numbers";
			$scope.buttonTitle = 'Convert';

			$scope.convertNumber = function (num) {
				return $scope.numberInWords = num * 2;
			}
		}]);