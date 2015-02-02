var mysql = require('mysql');
var qs = require('querystring');
var url = require('url');
var config = require('../config/config');
var resultCode = require('../config/resultcode');

exports.select = function (req, res, next) {
    var body = qs.parse(url.parse(req.url).query);
    var connection = mysql.createConnection(config.mysql_config);
    connection.connect();
    //var selectSql = 'SELECT * FROM users where userid = "' + body['userid'] + '"';
    var selectSql = 'SELECT * FROM users where userid = "' + body['userid'] + '"';
    connection.query(selectSql, function select(err, results, fields) {
        if (err) {
            throw err;
            res.send(501);
        }
        else if (results.length == 0) {
            res.send(resultCode.result(1));  //用户信息没找到
        }
        else {
            res.send(resultCode.result(0, results));
        }
    });
};

exports.selectAll = function (req, res, next) {
    var body = qs.parse(url.parse(req.url).query);
    var connection = mysql.createConnection(config.mysql_config);
    connection.connect();
    //var selectSql = 'SELECT * FROM users where userid = "' + body['userid'] + '"';
    var selectSql = 'SELECT * FROM users';
    connection.query(selectSql, function select(err, results, fields) {
        if (err) {
            throw err;
            res.send(501);
        }
        else if (results.length == 0) {
            res.send(resultCode.result(1));  //用户信息没找到
        }
        else {
            console.log('user ' + req.user.email + ' is calling /api/restricted');
            res.send(resultCode.result(0, results));
        }
    });
};

exports.login = function (req, res, next) {
    //var id = req.body.id;
    //var password = req.body.password;
    //var body = qs.parse(url.parse(req.url).query);
    var connection = mysql.createConnection(config.mysql_config);
    connection.connect();
    //var selectSql = 'SELECT * FROM users where userid = "' + body['userid'] + '"';
    var selectSql = 'SELECT * FROM users where userid = "' + req.body.id + '"';
    connection.query(selectSql, function select(err, results, fields) {
        if (err) {
            throw err;
            res.send(501);
        }
        else if (results.length == 0) {
            res.send(resultCode.result(1));  //用户信息没找到
        }
        else {
            if (req.body.password == results[0].password)
            {
                res.send(resultCode.result(0, results));
            }
            else
            {
                res.send(resultCode.result(1005));
            }
        }
    });
};