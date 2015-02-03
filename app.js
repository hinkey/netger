var express = require('express')
    , path = require('path')
    , ejs = require('ejs')
    , app = express()
    , server = require('http').createServer(app);
var routes = require('./api/routes/routes');
var socketServer = require('./api/socket/server')

app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html'); //替换文件扩展名ejs为html
app.use(express.json());
app.use(express.urlencoded());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

if (app.get('env') === 'development') {
    app.use(express.errorHandler());
}

// angular启动页
//app.get('/', function (req, res) {
//  res.sendfile('app/index.html');
//});
routes(app);
socketServer.socketServer();

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

var gather = require('./api/gather/http')


var schedule = require("node-schedule");
var rule = new schedule.RecurrenceRule();
var times = [];

for (var i = 1; i < 60; i++) {
    times.push(i);
}
rule.minute = times;
var j = schedule.scheduleJob(rule, function () {
    //gather.gather();
});