 (function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope', '$filter'];
function LunchCheckerController($scope, $filter) {
  $scope.outputMessage = "";
  $scope.userLunch = "";
  $scope.errorMessage = 0;

  $scope.checkLunch = function() {

    if($scope.userLunch === ""){
      $scope.errorMessage = 2;
      $scope.outputMessage = "Please enter data first";
      return;
    }

    var foodItems = $scope.userLunch.split(",");
    var count = foodItems.length;
    //console.log(foodItems);

    //check for empty food items
    foodItems.forEach(function(item){
        if(item.trim() === "")
          count--;
        //console.log(item, count);
    });

    if(count > 0 && count <= 3)
      $scope.outputMessage = "Enjoy!";
    else
      $scope.outputMessage = "Too much!"

    $scope.errorMessage = 1;
  };

  $scope.clearMessage = function() {
    //console.log($scope.outputMessage);
    $scope.outputMessage = "";
    $scope.errorMessage = 0;
  };
}

})(); 


