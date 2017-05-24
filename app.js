  angular.module('myApp', ['ngRoute'])
    .config( function($routeProvider){
        //going to config which route to go where
        $routeProvider.when("/", {
            templateUrl:"pages/main.html",
            controller:"MainController"
        })
        .when("/london", {
            templateUrl:"pages/london.html",
            controller:"LondonController"
        })
    })
    .controller("MainController", function($scope){
        $scope.message = "hello main";
    })
    .controller("LondonController", function($scope){
        $scope.message = "hello london";
    })