var user_w = require('../web/user');
var test = require('../web/test');
var history_http = require('../web/history_http');
module.exports = function (app) {
    app.get('/api/alluser', user_w.selectAll);
    app.post('/api/users', user_w.select);
    app.get('/api/test', test.select);
    app.get('/api/history_http', history_http.selectAll);
};