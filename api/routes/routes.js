var user_w = require('../web/user');
var test = require('../web/test');
var history_http = require('../web/history_http');

var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var secret = 'ergg456fdfgdfh';

module.exports = function (app) {
    app.get('/api/alluser', user_w.selectAll);
    app.post('/api/users', user_w.select);
    app.get('/api/test', test.select);
    app.get('/api/history_http',expressJwt({secret: secret}), history_http.selectAll);

    app.get('/api', expressJwt({secret: secret}) , user_w.selectAll);
   
    app.post('/authenticate', function (req, res) {
        //TODO validate req.body.username and req.body.password
        //if is invalid, return 401
        if (!(req.body.username === 'ww' && req.body.password === '123')) {
            res.send(401, 'Wrong user or password');
            return;
        }
        var profile = {
            first_name: 'John',
            last_name: 'Doe',
            email: 'john@doe.com',
            id: 123
        };
        // We are sending the profile inside the token
        var token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });
        res.json({ token: token });
    });

    app.get('/api/restricted', function (req, res) {
        console.log('user ' + req.user.email + ' is calling /api/restricted');
        res.json({
            name: 'foo'
        });
    });
};