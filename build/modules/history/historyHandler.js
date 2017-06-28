'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _historyModel = require('./historyModel');

var _historyModel2 = _interopRequireDefault(_historyModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    get_project_history: get_project_history,
    get_claim_history: get_claim_history,
    insert_history: insert_history
};


function get_project_history(reqData, callback) {
    _historyModel2.default.find({}).then(function (resData) {
        callback(resData);
    }).catch(function (err) {
        console.log('err while get_all_history call ' + err);
        callback(false);
    });
}

function get_claim_history(reqData, callback) {
    _historyModel2.default.find({}).then(function (resData) {
        callback(resData);
    }).catch(function (err) {
        console.log('err while get_claim_history call ' + err);
        callback(false);
    });
}

function insert_history(reqData, callback) {
    var newHistory = new _historyModel2.default({
        claim_name: reqData.claim_name,
        claim_id: reqData.claim_id,
        description: reqData.description,
        date: reqData.date
    });

    newHistory.save().then(function (resData) {
        callback(resData);
    }).catch(function (err) {
        console.log('err while get_claim_history call ' + err);
        callback(false);
    });
}