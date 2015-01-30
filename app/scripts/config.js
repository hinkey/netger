requirejs.config({
    baseUrl: '/scripts/angular',
    paths: {
        app: 'app',
        hello: 'hello',
        hello2: 'hello2',
        jquery: 'lib/jquery/jquery',
        angular: 'lib/angularjs/angular',
        text: 'lib/requirejs-text/text',
        json: 'lib/requirejs-plugins/json',
        appConfig: 'appConfig',
        'app.controllers': 'controllers'
    },
    shim: {
        //angular : { exports : 'angular'},
        //hello : { exports: 'hello' }
    },
    priority: ["angular"],
    map: {
        //'*': { 'jquery': 'jquery-private'},
        //'jquery-private': { 'jquery': 'jquery'}
    }
});