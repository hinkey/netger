var mysql = require('mysql');
var qs = require('querystring');
var url = require('url');
var config = require('../config/config');
var resultCode = require('../config/resultcode');

exports.selectAll = function (req, res, next) {
    var body = qs.parse(url.parse(req.url).query);
    var connection = mysql.createConnection(config.mysql_config);
    connection.connect();
    var selectSql = 'SELECT * FROM history_http';
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