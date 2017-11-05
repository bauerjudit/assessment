'use strict';

describe('numberConverterCtrl', function() {
  beforeEach(angular.mock.module('numberConverter'));

  var $controller,
      $rootScope;

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('$scope.convertNumber', function() {
    it('it should return an alert message', function() {
      var $scope = $rootScope.$new();
      var num = 'ropi';
      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('Not a valid number');
    });
  });

  describe('$scope.convertNumber', function() {
    it('it should return an alert message', function() {
      var $scope = $rootScope.$new();
      var num = 'm12m';
      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('Not a valid number');
    });
  });

  describe('$scope.convertNumber', function() {
    it('it should return an alert message', function() {
      var $scope = $rootScope.$new();
      var num = '-12';
      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('Not a valid number');
    });
  });

  describe('$scope.convertNumber', function() {
    it('it should return an alert message', function() {
      var $scope = $rootScope.$new();
      var num = '1.2';
      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('Not a valid number');
    });
  });

  describe('$scope.convertNumber', function() {
    it('it should return an alert message', function() {
      var $scope = $rootScope.$new();
      var num = '1,2';
      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('Not a valid number');
    });
  });

  describe('$scope.convertNumber', function() {
    it('it should return the correct string', function() {
      var $scope = $rootScope.$new();
      var num = 7;

      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('seven');
    });
  });

  describe('$scope.convertNumber', function() {
    it('it should return the correct string', function() {
      var $scope = $rootScope.$new();
      var num = 42;

      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('fourty-two');
    });
  });

  describe('$scope.convertNumber', function() {
    it('it should return the correct string', function() {
      var $scope = $rootScope.$new();
      var num = 2001;

      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('two thousand and one');
    });
  });

  describe('$scope.convertNumber', function() {
    it('it should return the correct string', function() {
      var $scope = $rootScope.$new();
      var num = 1999;

      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('nineteen hundred and ninety-nine');
    });
  });

  describe('$scope.convertNumber', function() {
    it('it should return the correct string', function() {
      var $scope = $rootScope.$new();
      var num = 1999;

      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('nineteen hundred and ninety-nine');
    });
  });

  describe('$scope.convertNumber', function() {
    it('it should return the correct string', function() {
      var $scope = $rootScope.$new();
      var num = 17999;

      var controller = $controller('numberConverterCtrl', { $scope: $scope });
      $scope.convertNumber(num);
      expect($scope.numberInWords).toEqual('seventeen thousand nine hundred and ninety-nine');
    });
  });
});