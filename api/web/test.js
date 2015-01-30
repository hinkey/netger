var mysql = require('mysql');
var qs = require('querystring');
var url = require('url');
var config = require('../config/config');
var resultCode = require('../config/resultcode');

exports.select = function (req, res) {
    var body = qs.parse(url.parse(req.url).query);
    var connection = mysql.createConnection(config.mysql_config);
    connection.connect();
    //var selectSql = 'SELECT * FROM users where userid = "' + body['userid'] + '"';
    var selectSql = 'SELECT * FROM test where id = "' + body['id'] + '"';
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
