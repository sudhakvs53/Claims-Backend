'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _appConstantModel = require('./../models/appConstantModel');

var _appConstantModel2 = _interopRequireDefault(_appConstantModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    get_application_constants: get_application_constants,
    set_application_constant_value: set_application_constant_value,
    del_application_constant_value: del_application_constant_value
};


function get_application_constants(callback) {

    _appConstantModel2.default.find({}).then(function (data) {
        callback(data);
    }).catch(function (err) {
        console.log('err while fetching application constants ' + err);
    });
};

function set_application_constant_value(appConstant, callback) {
    _appConstantModel2.default.update({ "name": appConstant.name }, { "$push": { "values": appConstant.value } }).then(function () {
        callback(true);
    }).catch(function (err) {
        console.log('err while updating value item ' + err);
        callback(false);
    });
}

function del_application_constant_value(appConstant, callback) {
    _appConstantModel2.default.update({ "name": appConstant.name }, { "$pull": { "values": appConstant.value } }).then(function () {
        callback(true);
    }).catch(function (err) {
        console.log('err while deleting value item ' + err);
        callback(false);
    });
}