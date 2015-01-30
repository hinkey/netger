exports.db_conn = 'mongodb://ww:www123@t.10000bee.com:27017/netmanager';
var time = require('time');

exports.now_time = function(){
    var timeBuf = new time.Date();
    var now_time = timeBuf.getFullYear() + "-" + (timeBuf.getMonth() + 1) + "-" + timeBuf.getDate() + " " + timeBuf.getHours() + ":" + timeBuf.getMinutes() + ":" + timeBuf.getSeconds();
    return now_time;
}
exports.get_time = function(data){
    var timeBuf = new time.Date(data);
    var get_time = timeBuf.getFullYear() + "-" + (timeBuf.getMonth() + 1) + "-" + timeBuf.getDate() + " " + timeBuf.getHours() + ":" + timeBuf.getMinutes() + ":" + timeBuf.getSeconds();
    return get_time;
}

exports.mysql_config = {
    host: 'a.oaapi.com',
    user: 'root',
    password: 'pass9cuo@2014',
    database: "netmanager"
};
var mysql = require('mysql');
exports.pool = mysql.createPool({
    host     : 'a.oaapi.com',
    user     : 'root',
    password : 'pass9cuo@2014',
    port: '3306',
    connectionLimit:3,
    database: 'netmanager'
});