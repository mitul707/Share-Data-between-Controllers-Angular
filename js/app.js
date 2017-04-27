var myApp = angular.module('myApp', []);

myApp.factory('MyService', function() {
    return {
        data: {
            message : ""
        }
    };
});

myApp.controller('FirstController', function($scope, MyService) {
    $scope.data = MyService.data;
})

myApp.controller('SecondController', function($scope, MyService) {
    $scope.data = MyService.data;
})