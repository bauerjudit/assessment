'use strict';

angular.module('numberConverter')
	.controller( 'numberConverterCtrl', 
		[ '$scope' , 
		function ($scope) {
			var ones = [ '', 'one', 'two', 'three', 'four', 'five', 'six',
				'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
				'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
				tens = ['', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
				amounts = ['', 'thousand'];

			$scope.title = "Let's convert numbers";
			$scope.buttonTitle = 'Convert';

			function isNumber(n) {
 				return !isNaN(parseFloat(n)) && isFinite(n);
			}

			function isPositiveWholeNumber(n) {
				if ( n > 0 && n % 1 === 0 ) {
					return true
				}
			}

			$scope.convertNumber = function (num) {
				var checkTens = num % 100,
					checkHundreds = Math.floor( num / 100 ) % 10,
					checkThousands = Math.floor( num / 1000 ),
					convertedNumber = '';

				$scope.numberInWords = '';

				if ( isNumber(num) && isPositiveWholeNumber(num) ) {
					if ( parseInt(num) === 0 ) {
						convertedNumber = 'zero';
					} else {

						if ( checkHundreds > 0 ) {
							if ( num < 2000 && num > 1000 ) {
								convertedNumber = '';
							} else if ( num % 100 === 0 ) {
								convertedNumber = ones[checkHundreds] + ' hundred';
							} else {
								convertedNumber = ones[checkHundreds] + ' hundred and';
							}
						}

						if ( checkTens < 20 ) {
							convertedNumber = convertedNumber + ' ' + ones[checkTens]
						} else {
							if ( ones[checkTens % 10] ) {
								convertedNumber = convertedNumber + ' ' + tens[parseInt(checkTens / 10 ) - 1] + '-' + ones[checkTens % 10];
							} else {
								convertedNumber = convertedNumber + ' ' + tens[parseInt(checkTens / 10 ) - 1];
							}
						}

						if ( checkThousands > 0 ) {
							if ( checkThousands < 2 ) {
								var checkHundred = Math.floor(num / 100);

								if ( parseInt(num) === 1000 ) {
									convertedNumber = 'one thousand';
								} else {
									convertedNumber = ones[checkHundred] + ' hundred and' + convertedNumber;
								}
							} else if ( num < 2100  && num > 2000 ) {
								convertedNumber = ones[checkThousands] + ' ' + amounts[1] + ' and' + convertedNumber;
							} else {
								convertedNumber = ones[checkThousands] + ' ' + amounts[1] + ' ' + convertedNumber;
							}
						}
					}
					$scope.numberInWords = convertedNumber.trim();

				} else {
					$scope.numberInWords = 'Not a valid number';
				}
			}
		}]);