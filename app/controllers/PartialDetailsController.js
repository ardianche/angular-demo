angular.module('myApp')
.controller('partialDetailsController',['$scope',function ($scope){
    var ctrl = this;
    $scope.full_preview = false;

    $scope.$on('closePreview',function(event){
        $scope.full_preview = false;
        console.log('full preview', $scope.full_preview);
    });
}]);