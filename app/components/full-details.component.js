angular.module('myApp').component('fullDetails',{
    templateUrl:'./Views/FullDetails.html',
    controller:'fullDetailsController',
    bindings: {
        item: '<',
    }
})