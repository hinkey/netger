'use strict';

var chartControllers = angular.module('chartControllers', []);

chartControllers.controller('chart', ['$scope', '$http',
    function ($scope, $http) {
        var vm = $scope.vm = {};
        vm.chart = undefined;
        vm.setTitle = function(title) {
            vm.chart.xAxis[0].setTitle({text: title});
        };

        //var url = '/api/history?dtype=3&attriId=42&id=0026B136CB000114&date1=20141201&date2=20141230';
        //
        //    var timer ='a';
        //    var value = 0;
        //    $http({method: 'GET', url: url}).success(function (data, status, headers, config) {
        //        //for (var i = 0; i < data.detail.devhistory.length; ++i) {}
        //        //for (var i = 0; i < 2; ++i) {
        //        //time += data.detail.devhistory[i].time + ','
        //        //value += data.detail.devhistory[i].vale[0].v + ','
        //        //items.push({
        //        //    time : data.detail.devhistory[i].time,
        //        //    v : data.detail.devhistory[i].vale[0].v
        //        //    //id: data.detail[i].id,
        //        //    //userid: data.detail[i].userid,
        //        //    //name: data.detail[i].name,
        //        //    //sex: data.detail[i].sex,
        //        //    //tel: data.detail[i].tel,
        //        //    //mail: data.detail[i].mail,
        //        //    //department: data.detail[i].department
        //        //});
        //        //}
        //        // timer = '"'+ data.detail.devhistory[0].time+'",' + '"'+ data.detail.devhistory[1].time+'"';
        //
        //        //value = data.detail.devhistory[0].vale[0].v +','+data.detail.devhistory[1].vale[0].v;
        //        value=data.detail.devhistory[0].vale[0].v;
        //        //vm.chart.series[0].setData(12);
        //        vm.chart.series[0].data=12;
        //        timer=data.detail.devhistory[0].time;
        //        //timer=data.detail.devhistory[0].time;
        //        //vm.chart.xAxis[0].setData('8');
        //        //timer=data.detail.devhistory[0].time;
        //        //return timer,value;
        //        //var chart = new Highcharts.Chart($scope.config);
        //        //$scope.$watch('config.xAxis', function(value) {
        //        //    chart.redraw();
        //        //}, true);
        //        //$scope.$watch('config.series', function(value) {
        //        //    chart.redraw();
        //        //}, true);
        //        //vm.config.chart.redraw();
        //        //value = vm.config.series.
        //        // timer = '"'+ data.detail.devhistory[0].time+'",' + '"'+ data.detail.devhistory[1].time+'"';
        //    }).
        //        error(function (data, status, headers, config) {
        //            alert('error: ' + data);
        //        });


        vm.config = {
            chart: {
                plotBackgroundColor: 'rgba(255, 255, 255, .9)',
                plotShadow: true,
                height: 400,
                type: 'line'
            },
            title: {
                text: '月平均气温'
            },
            subtitle: {
                text: '来源: WorldClimate.com'
            },
            xAxis: {
                title: {
                    text: '月份'
                },
                categories: [
                    //getHttp(timer)
                    //"2014-12-1 0:9:4",22,33
                    //"2014-12-1 0:9:4","2014-12-1 1:9:8"
                    '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'
                    //'"'+ data.detail.devhistory[0].time+'",' + '"'+ data.detail.devhistory[1].time+'"'
                    //timer
                    //data.detail.devhistory[0].time
                ]
            },
            yAxis: {
                title: {
                    text: '温度(°C)'
                }
            },
            tooltip: {
                enabled: true,
                formatter: function() {
                    return '<b>'+ this.series.name +'</b><br>'+this.x +': '+ this.y +'°C';
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true
                }
            },
            series: [
                {
                    name: '伦敦',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                    //data:[
                    //    //getHttp(value)
                    //    value
                    //    //data.detail.devhistory[0].vale[0].v
                    //    //data.detail.devhistory[0].vale[0].v +','+data.detail.devhistory[1].vale[0].v
                    //    //19.4,19.4
                    //    //value
                    //    //1,2,3
                    //]
                }
            ]
        };


    }
]);

//chartControllers.controller('chart', function ($scope) {
//    var vm = $scope.vm = {};
//    vm.chart = undefined;
//    vm.setTitle = function(title) {
//        vm.chart.xAxis[0].setTitle({text: title});
//    };
//    vm.config = {
//        chart: {
//            plotBackgroundColor: 'rgba(255, 255, 255, .9)',
//            plotShadow: true,
//            height: 400,
////      plotBorderWidth: 1,
//            type: 'line'
//        },
//        title: {
//            text: '月平均气温'
//        },
//        subtitle: {
//            text: '来源: WorldClimate.com'
//        },
//        xAxis: {
//            title: {
//                text: '月份'
//            },
//            categories: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
//        },
//        yAxis: {
//            title: {
//                text: '温度(°C)'
//            }
//        },
//        tooltip: {
//            enabled: true,
//            formatter: function() {
//                return '<b>'+ this.series.name +'</b><br>'+this.x +': '+ this.y +'°C';
//            }
//        },
//        plotOptions: {
//            line: {
//                dataLabels: {
//                    enabled: true
//                },
//                enableMouseTracking: true
//            }
//        },
//        series: [{
//            name: '北京',
//            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
//        }, {
//            name: '伦敦',
//            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
//        }]
//    };
//});