var configService = require('../config');

var ConfigCtrl = function () {
    this.get = get;
};

var get = function (req, res) {
    res.send(configService.getClientSettings());
};

module.exports = ConfigCtrl;