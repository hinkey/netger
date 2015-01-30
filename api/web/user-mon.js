var mongoose = require('mongoose');
var config = require('../config/config');
var model = require('../model/user');

exports.ww = function (req, res) {
    res.redirect('/ww');
}

exports.query = function (req, res) {
    // mongoose 链接
    var db = mongoose.createConnection(config.db_conn);
    var mongooseSchema = new mongoose.Schema(model.user);
// model
    var mongooseModel = db.model('user', mongooseSchema);
// 基于静态方法Model的查询
    mongooseModel.find(({username: 'ww'},{cnname: '作者'}), function(error, result){
        if(error) {
            console.log(error);
        } else {
            res.send(result);
        }
        //关闭数据库链接
        db.close();
    });
};

exports.delete = function (req, res) {
    // mongoose 链接
    var db = mongoose.createConnection(config.db_conn);
    var mongooseSchema = new mongoose.Schema(model.user);
// model
    var mongooseModel = db.model('user', mongooseSchema);
// 基于静态方法Model的查询
    mongooseModel.remove(({_id: req}), function(error, result){
        if(error) {
            console.log(error);
        } else {
            res.send(result);
        }
        //关闭数据库链接
        db.close();
    });
};

exports.register = function (req, res) {
    // mongoose 链接
    var db = mongoose.createConnection(config.db_conn);
    var mongooseSchema = new mongoose.Schema(model.user);
// model
    var mongooseModel = db.model('user', mongooseSchema);
// 增加记录 基于model操作
    var doc = {username : 'ww', password : 'www123', cnname : '作者'};
    mongooseModel.create(doc, function(error){
        if(error) {
            console.log(error);
        } else {
            res.send('ok');
        }
        // 关闭数据库链接
        db.close();
    });
};


exports.update = function (req, res) {
    // mongoose 链接
    var db = mongoose.createConnection(config.db_conn);
    var mongooseSchema = new mongoose.Schema(model.user);
// model
    var mongooseModel = db.model('user', mongooseSchema);
// 修改记录
    mongooseModel.update(conditions, update, options, callback);
    var conditions = {username : 'model_demo_username'};
    var update     = {$set : {age : 27, title : 'model_demo_title_update'}};
    var options    = {upsert : true};
    mongooseModel.update(conditions, update, options, function(error){
        if(error) {
            console.log(error);
        } else {
            console.log('update ok!');
        }
        //关闭数据库链接
        db.close();
    });
};



exports.list = function (req, res) {
    res.send('Our Sample API is up...wwwwwwwwwwwww');
}