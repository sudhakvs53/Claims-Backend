'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dburl = _config.dev.dbUrl.mLabDBurl; //abinashLocalDBurl for local, mLabDBurl cloud connection

var db = _mongoose2.default.connection;
_mongoose2.default.Promise = global.Promise;

db.on('error', function () {
    console.log('error while communicating to database ');
});

exports.openConnection = function () {
    return _mongoose2.default.connect(dburl, function (err) {
        if (err) {
            return console.log('err while connecting to db ' + err);
        } else {
            console.log('db connected');
        }
    });
};

exports.closeConnection = function (callback) {
    db.close().then(function () {
        console.log('db disconnected');
        callback();
    });
};