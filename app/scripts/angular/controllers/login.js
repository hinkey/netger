'use strict';
var loginControllers = angular.module('loginControllers', []);

loginControllers.controller('loginCtrl', function ($scope, $http, $window,$location) {
    $scope.user = {username: 'ww', password: '123'};
    $scope.message = '';
    $scope.submit = function () {
        $http
            .post('/authenticate', $scope.user)
            .success(function (data, status, headers, config) {
                $window.sessionStorage.token = data.token;
                $scope.message = 'Welcome';
                $location.path("/index");
                //$scope.location.path('/index');
            })
            .error(function (data, status, headers, config) {
                // Erase the token if the user fails to log in
                delete $window.sessionStorage.token;
                // Handle login errors here
                $scope.message = 'Error: Invalid user or password';
            });
    };
});