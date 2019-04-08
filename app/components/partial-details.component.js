angular.module('myApp').component('partialDetails',{
    templateUrl:'./Views/partialDetails.html',
    controller:'partialDetailsController',
    bindings: {
        item: '<',
    }
})