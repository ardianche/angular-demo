angular.module('myApp')
.controller('fullDetailsController',['$scope',function ($scope){
    var ctrl = this;

    $scope.closeIt = function (){
        console.log('testing close');
        $scope.$emit('closePreview');
    }
}]);