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
        .when("/invoice/:id", {
            templateUrl:"pages/invoice.html",
            controller:"InvoiceController"
        })

    })
    .controller("MainController", function($scope){
        $scope.message = "hello main";
    })
    .controller("LondonController", function($scope){
        $scope.message = "hello london";
    })
    .controller("InvoiceController", function($scope, $routeParams){
      

        //user  = myservice.getData($routeParams.id)
        if($routeParams.id  == 1){
            $scope.data = "VIP INVOICE"
        }else
            $scope.data = "NORMAL "

    })
    