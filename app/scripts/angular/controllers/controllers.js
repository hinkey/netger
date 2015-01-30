'use strict';
function WelcomeCtrl($scope) {
    $scope.username = 'Conan_Z';
    $scope.password = 'wwwwwww';
    //var url = 'http://localhost/query';// URL where the Node.js server is running
    //$http.get(url).success(function(data) {
    //    //$scope.users = data;
    //    $scope.username = data;
    //    console.log(data);
    //    $scope.password = data;
    //});
}

function UserListCtrl($scope, $http) {
    $scope.formData = {};
    //查询 get
    $http.get('/api/alluser')
        .success(function (data) {
            $scope.name = data.detail[0].name;
            $scope.password = data.detail[0].password;
        })
        .error(function (data) {
            console.log('err' + data);
        }
    );

    //post方法
    $scope.createTodo = function () {
        $http.post('/api/todos', $scope.formData)
            .success(function (data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('err' + data);
            }
        );
    }

    //delete 删除方法
    $scope.deleteTodo = function (id) {
        $http.delete('/api/todos' + id)
            .success(function (data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('err' + data);
            }
        );
    }
    //$scope.username = 'Conan_Z';
    //$scope.password = 'wwwwwww';
    //var url = 'http://localhost/query';// URL where the Node.js server is running
    //$http.get(url).success(function(data) {
    //    //$scope.users = data;
    //    $scope.username = data;
    //    console.log(data);
    //    $scope.password = data;
    //});
}

function contact($scope) {
    var formData = {};
    //查询 get
    $http.get('/api/alluser')
        .success(function (data) {
            $scope.name = data.detail[0].name;
            $scope.password = data.detail[0].password;
        })
        .error(function (data) {
            console.log('err' + data);
        }
    );

    //登录
    //post方法
    $scope.checkUser = function () {
        $http.post('/api/alluser', $scope.formData)
            .success(function (data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('err' + data);
            }
        );
    }
}

