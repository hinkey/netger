//'use strict';
////这里是ui-route
//var routerApp = angular.module('routerApp', ['ui.router']);
//routerApp.config(function($stateProvider, $urlRouterProvider) {
//    $urlRouterProvider.otherwise('/index');
//    $stateProvider
//        .state('index', {
//            url: '/index',
//            views: {
//                '': {
//                    templateUrl: 'tpls3/index.html'
//                },
//                'topbar@index': {
//                    templateUrl: 'tpls3/topbar.html'
//                },
//                'main@index': {
//                    templateUrl: 'tpls3/home.html'
//                }
//            }
//        })
//        .state('index.usermng', {
//            url: '/usermng',
//            views: {
//                'main@index': {
//                    templateUrl: 'tpls3/usermng.html',
//                    controller: function($scope, $state) {
//                        $scope.addUserType = function() {
//                            $state.go("index.usermng.addusertype");
//                        }
//                    }
//                }
//            }
//        })
//        .state('index.usermng.highendusers', {
//            url: '/highendusers',
//            templateUrl: 'tpls3/highendusers.html'
//        })
//        .state('index.usermng.normalusers', {
//            url: '/normalusers',
//            templateUrl: 'tpls3/normalusers.html'
//        })
//        .state('index.usermng.lowusers', {
//            url: '/lowusers',
//            templateUrl: 'tpls3/lowusers.html'
//        })
//        .state('index.usermng.addusertype', {
//            url: '/addusertype',
//            templateUrl: 'tpls3/addusertypeform.html',
//            controller: function($scope, $state) {
//                $scope.backToPrevious = function() {
//                    window.history.back();
//                }
//            }
//        })
//        .state('index.permission', {
//            url: '/permission',
//            views: {
//                'main@index': {
//                    template: '这里是权限管理'
//                }
//            }
//        })
//        .state('index.report', {
//            url: '/report',
//            views: {
//                'main@index': {
//                    template: '这里是报表管理'
//                }
//            }
//        })
//        .state('index.settings', {
//            url: '/settings',
//            views: {
//                'main@index': {
//                    template: '这里是系统设置'
//                }
//            }
//        })
//});


//这里是ng-router
'use strict';

var myAppModule = angular.module('my.app.module', [
    'ngRoute',
    'contactsControllers',
    'contactsFilters',
    'chartControllers',
    'highchartsDirectives',
    'hisHttpControllers',
    'hisHttpFilters',
    'loginControllers'
]);


//$locationProvider.html5Mode(true);  //这个意思是开启html5模式，就没有#了
myAppModule.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: '/views/tpl/login.html', controller: 'loginCtrl'}).otherwise({redirectTo: '/'});
    $routeProvider
        .when('/contacts', {templateUrl: '/views/tpl/contacts.html', controller: 'contacts'});
    $routeProvider
        .when('/position', {templateUrl: '/views/tpl/position.html', controller: 'position'});
    $routeProvider
        .when('/test', {templateUrl: '/views/tpl/test.html', controller: 'test'});
    $routeProvider
        .when('/chart', {templateUrl: '/views/tpl/chart.html', controller: 'chart'});
    $routeProvider
        .when('/hh', {templateUrl: '/views/tpl/history_http.html', controller: 'hisHttp'});
    $routeProvider
        .when('/hh', {templateUrl: '/views/tpl/history_http.html', controller: 'hisHttp'});
}]);

myAppModule.factory('authInterceptor', function ($rootScope, $q, $window) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            return config;
        },
        response: function (response) {
            if (response.status === 401) {
                // handle the case where the user is not authenticated
            }
            return response || $q.when(response);
        }
    };
});
myAppModule.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});