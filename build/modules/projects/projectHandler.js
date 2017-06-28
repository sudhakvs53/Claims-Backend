'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _projectModel = require('./projectModel');

var _projectModel2 = _interopRequireDefault(_projectModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    get_projects: get_projects,
    insert_project: insert_project
};


function get_projects(callback) {
    _projectModel2.default.find({}).then(function (data) {
        callback(data);
    }).catch(function (err) {
        console.log('err in get_projects ' + err);
    });
}

function insert_project(reqData, callback) {
    var newProj = new _projectModel2.default({
        project_title: reqData.project_title,
        need_state: reqData.need_state,
        prod_form: reqData.prod_form,
        claim_type: reqData.claim_type,
        project_status: reqData.project_status,
        created_by: reqData.created_by,
        created_on: Date.now,
        mod_by: reqData.mod_by,
        mod_on: Date.now
    });

    newProj.save().then(function (resData) {
        callback(resData.id);
    }).catch(function (err) {
        console.log('err while inserting project ' + err);
        callback(false);
    });
}