'use strict';

var contactsControllers = angular.module('hisHttpControllers', []);

contactsControllers.controller('hisHttp', ['$scope', '$http',
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
                label: 'ip',
                name: 'ip_wan',
                type: 'string'
            },
            {
                label: '服务器名称',
                name: 'server_name',
                type: 'string'
            },
            {
                label: 'app名称',
                name: 'app_name',
                type: 'string'
            },
            {
                label: 'pid',
                name: 'pid',
                type: 'string'
            },
            {
                label: '状态',
                name: 'status',
                type: 'string'
            },
            {
                label: '重启次数',
                name: 'restarted',
                type: 'string'
            },
            {
                label: '开启时长',
                name: 'uptime',
                type: 'string'
            },
            {
                label: 'cpu内存',
                name: 'cpu',
                type: 'string'
            },
            {
                label: '消耗内存',
                name: 'memory',
                type: 'string'
            },
            {
                label: '采集时间',
                name: 'cjtime',
                type: 'string'
            }
        ];

        var url = '/api/history_http';
        $http({method: 'GET', url: url}).success(function (data, status, headers, config) {
            //$scope.lists = data.users; //直接data不行
            console.log("ww12wefregf");
            vm.items = [];
            for (var i = 0; i < data.detail.length; ++i) {
                vm.items.push({
                    id: data.detail[i].id,
                    ip_wan: data.detail[i].ip_wan,
                    server_name: data.detail[i].server_name,
                    app_name: data.detail[i].app_name,
                    pid: data.detail[i].pid,
                    status: data.detail[i].status,
                    restarted: data.detail[i].restarted,
                    uptime: data.detail[i].uptime,
                    cpu: data.detail[i].cpu,
                    memory: data.detail[i].memory,
                    cjtime: data.detail[i].cjtime
                });
            }
        }).
            error(function (data, status, headers, config) {
                alert('error: ' + data);
            });
    }
]);