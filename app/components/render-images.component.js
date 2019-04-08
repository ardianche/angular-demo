angular.module('myApp').component('renderImages',{
    templateUrl:'./Views/RenderImages.html',
    controller:'renderImagesController',
    bindings: {
        image: '<',
    }
})