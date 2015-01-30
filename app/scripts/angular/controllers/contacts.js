'use strict';

var contactsControllers = angular.module('contactsControllers', []);

contactsControllers.controller('contacts', ['$scope', '$http',
    function ($scope, $http) {
        var vm = $scope.vm = {};
        vm.page = {
            size: 5,
            index: 1
        };
        vm.sort = {
            column: 'id',
            direction: -1,
            toggle: function (column) {
                if (column.sortable === false)
                    return;

                if (this.column === column.name) {
                    this.direction = -this.direction || -1;
                } else {
                    this.column = column.name;
                    this.direction = -1;
                }
            }
        };
        // 构建模拟数据
        vm.columns = [
            {
                label: 'ID',
                name: 'id',
                type: 'string'
            },
            {
                label: '用户id',
                name: 'userid',
                type: 'string'
            },
            {
                label: '姓名',
                name: 'name',
                type: 'string'
            },
            {
                label: '性别',
                name: 'sex',
                type: 'string'
            },
            {
                label: '电话',
                name: 'tel',
                type: 'string'
            },
            {
                label: '邮箱',
                name: 'mail',
                type: 'string'
            },
            {
                label: '部门',
                name: 'department',
                type: 'string'
            }
        ];
        //查询 get
        //var url = '/api/alluser';
        //$scope.getResult = function () {
        //    $http.get(url)
        //        .success(function (data) {
        //            vm.items = [];
        //            for (var i = 0; i < data.detail.length; ++i) {
        //                vm.items.push({
        //                    id: data.detail[i].id,
        //                    userid: data.detail[i].userid,
        //                    name: data.detail[i].name,
        //                    sex: data.detail[i].sex,
        //                    tel: data.detail[i].tel,
        //                    mail: data.detail[i].mail,
        //                    department: data.detail[i].department
        //                });
        //            }
        //        });
        //};

        var url = '/api/alluser';
        $http({method: 'GET', url: url}).success(function (data, status, headers, config) {
            //$scope.lists = data.users; //直接data不行
            vm.items = [];
            for (var i = 0; i < data.detail.length; ++i) {
                vm.items.push({
                    id: data.detail[i].id,
                    userid: data.detail[i].userid,
                    name: data.detail[i].name,
                    sex: data.detail[i].sex,
                    tel: data.detail[i].tel,
                    mail: data.detail[i].mail,
                    department: data.detail[i].department
                });
            }
        }).
            error(function (data, status, headers, config) {
                alert('error: ' + data);
            });

        //
        //$scope.getResult();
        //
        //$http({method: 'GET', url: '/lis'}).success(function (data, status, headers, config) {
        //    $scope.lists = data.users; //直接data不行 }).
        //     error(function(data, status, headers, config) { alert('error: ' + data); });
        //     var url = '/api/alluser';
        //    $http.get({url: url})
        //        .success(function (data) {
        //            vm.items = [];
        //            for (var i = 0; i < data.detail.length; ++i) {
        //                vm.items.push({
        //                    id: data.detail[i].id,
        //                    userid :data.detail[i].userid,
        //                    name: data.detail[i].name,
        //                    sex : data.detail[i].sex,
        //                    tel: data.detail[i].tel,
        //                    mail: data.detail[i].mail,
        //                    department: data.detail[i].department
        //                });
        //            }
        //        })
        //        .error(function (data) {
        //            console.log('err' + data);
        //        }
        //    );
    }
]);