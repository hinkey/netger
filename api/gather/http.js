var nodegrass = require('nodegrass');
var config = require('../config/config')
exports.gather = function () {
    var url1 = 'http://113.57.128.61:9615'
    var url2 = 'http://121.42.153.172:9615'
    nodegrass.get(url1,function(data,status,headers){
        if (status == 200)
        {
            var data_json = JSON.parse(data);
            var ip_lan = data_json.monit.interfaces.eth0[0].address;
            var ip_wan = data_json.monit.interfaces.eth1[0].address;
            var server_name = data_json.system_info.hostname;
            var app_name = data_json.processes[0].name;
            var app_id = data_json.processes[0].pm_id;
            var mode = data_json.processes[0].pm2_env.exec_mode;
            var pid = data_json.processes[0].pid;
            var status_app = data_json.processes[0].pm2_env.status;
            var restarted = data_json.processes[0].pm2_env.restart_time;
            var uptime = config.get_time(data_json.processes[0].pm2_env.created_at);
            var cpu = data_json.processes[0].monit.cpu;
            var memory = (data_json.processes[0].monit.memory)/1048576;
            var cjtime = config.now_time();
            var sql = 'INSERT INTO history_http (ip_lan,ip_wan,server_name,app_name,app_id,mode,pid,status,restarted,uptime,cpu,memory,cjtime) ' +
                'values ("'+ip_lan+'","'+ip_wan+'","'+server_name+'","'+app_name+'",'+app_id+',"'+mode+'",'+pid+',"'+status_app+'",'+restarted+',"'+uptime+'","'+cpu+'%","'+memory+'MB","'+cjtime+'"); '
            //插入到数据库里去
            PushToMysql(sql);
        }
    },'utf8').on('error', function(e) {
        console.log("Got error: " + e.message);
    });
    nodegrass.get(url2,function(data,status,headers){
        if (status == 200)
        {
            var data_json = JSON.parse(data);
            var ip_lan = data_json.monit.interfaces.eth0[0].address;
            var ip_wan = data_json.monit.interfaces.eth1[0].address;
            var server_name = data_json.system_info.hostname;
            var app_name = data_json.processes[0].name;
            var app_id = data_json.processes[0].pm_id;
            var mode = data_json.processes[0].pm2_env.exec_mode;
            var pid = data_json.processes[0].pid;
            var status_app = data_json.processes[0].pm2_env.status;
            var restarted = data_json.processes[0].pm2_env.restart_time;
            var uptime = config.get_time(data_json.processes[0].pm2_env.created_at);
            var cpu = data_json.processes[0].monit.cpu;
            var memory = (data_json.processes[0].monit.memory)/1048576;
            var cjtime = config.now_time();
            var sql = 'INSERT INTO history_http (ip_lan,ip_wan,server_name,app_name,app_id,mode,pid,status,restarted,uptime,cpu,memory,cjtime) ' +
                'values ("'+ip_lan+'","'+ip_wan+'","'+server_name+'","'+app_name+'",'+app_id+',"'+mode+'",'+pid+',"'+status_app+'",'+restarted+',"'+uptime+'","'+cpu+'%","'+memory+'MB","'+cjtime+'"); '
            //插入到数据库里去
            PushToMysql(sql);
        }
    },'utf8').on('error', function(e) {
        console.log("Got error: " + e.message);
    });
}

function PushToMysql(sql) {
    config.pool.getConnection(function(err, connection) {
        connection.query(sql, function(err, results) {
            if (err) {
                console.log(err);
            }
            connection.release();
        });
    });

}