angular.module('app').controller('mainCtrl', function($scope, mainSvc) {
  $scope.test = "Hi dad";
  $scope.getMeASandwich = function() {
    mainSvc.getMeASandwich().then(function(response) {
      $scope.sammich = response.data;
    });
  };
  $scope.makeNewSandwich = function(max) {
    var sandwichData = {
      sandwich: max,
    };
    mainSvc.makeNewSandwich(sandwichData).then(function(response) {
      $scope.allSammiches = response.data;
    });
  };
});
