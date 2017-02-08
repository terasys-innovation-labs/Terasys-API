var device = require('../controllers/control.device');
var temperature = require('../controllers/control.temperature');
var humidity = require('../controllers/control.humidity');

module.exports = function(router){

    router.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    require('./route.device')(router);
    require('./route.temperature')(router);
    require('./route.humidity')(router);

};