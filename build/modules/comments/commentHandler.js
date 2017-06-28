'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commentModel = require('./commentModel');

var _commentModel2 = _interopRequireDefault(_commentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    get_project_comments: get_project_comments,
    get_claim_comments: get_claim_comments,
    insert_comment: insert_comment
};


function get_project_comments(reqData, callback) {
    _commentModel2.default.find({ project_title: reqData.project_title }).then(function (resData) {
        callback(resData);
    }).catch(function (err) {
        console.log('err while get_project_comments call ' + err);
        callback(false);
    });
}

function get_claim_comments(reqData, callback) {
    _commentModel2.default.find({ claim_name: reqData.claim_name }).then(function (resData) {
        callback(resData);
    }).catch(function (err) {
        console.log('err while get_claim_comments call ' + err);
        callback(false);
    });
}

function insert_comment(reqData, callback) {
    var newComment = new _commentModel2.default({
        claim_id: reqData.claim_id,
        claim_name: reqData.claim_name,
        project_title: reqData.project_title,
        commented_by: reqData.commented_by,
        commented_on: reqData.commented_on,
        comment_text: reqData.comment_text
    });

    newComment.save().then(function (resData) {
        callback(resData);
    }).catch(function (err) {
        console.log('err while insert_comment call ' + err);
        callback(false);
    });
}