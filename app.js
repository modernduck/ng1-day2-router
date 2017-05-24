  angular.module('myApp', ['ngRoute'])
    .config( function($routeProvider){
        //going to config which route to go where
        $routeProvider.when("/", {
            templateUrl:"pages/main.html"
        })
        .when("/london", {
            templateUrl:"pages/london.html"
        })


    })