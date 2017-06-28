'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _claimModel = require('./claimModel');

var _claimModel2 = _interopRequireDefault(_claimModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    insert_claim_details: insert_claim_details,
    insert_claim_formulas: insert_claim_formulas,
    insert_claim_substantiations: insert_claim_substantiations,
    get_all_claims: get_all_claims
};


function insert_claim_details(reqData, callback) {
    var newClaim = new _claimModel2.default({
        claim_name: reqData.claim_name,
        claim_type: reqData.claim_type,
        prod_form_name: reqData.prod_form_name,
        need_state_name: reqData.need_state_name,
        benefit_area_name: reqData.benefit_area_name,
        claim_status: 'In_Progress',
        proj_title: reqData.proj_title,
        claim_version: '0.0',
        region: reqData.region,
        exception: reqData.exception,
        created_on: new Date(),
        created_by: reqData.created_by,
        approved_on: null,
        approved_by: null,
        mod_dt: new Date(),
        mod_by: reqData.mod_by
    });

    newClaim.save().then(function (resData) {
        callback(resData.id);
    }).catch(function (err) {
        console.log('err while inserting claim ' + err);
        callback(false);
    });
}

function insert_claim_formulas(reqData, callback) {
    var formula_to_insert = [];
    reqData.formula.forEach(function (item) {
        formula_to_insert.push(item);
    });
    _claimModel2.default.findOneAndUpdate({ _id: reqData.claim_id }, { $set: { formula: formula_to_insert } }).then(function () {
        callback();
    }).catch(function (err) {
        console.log('err while inserting formula for claim id ' + reqData.claim_id + ' and err ' + err);
    });
}

function insert_claim_substantiations(reqData, callback) {
    var substantiation_to_insert = [];
    reqData.substantiation.forEach(function (item) {
        substantiation_to_insert.push(item);
    });
    _claimModel2.default.findOneAndUpdate({ _id: reqData.claim_id }, { $set: { substantiation: substantiation_to_insert } }).then(function () {
        callback();
    }).catch(function (err) {
        console.log('err while inserting substantiation for claim id ' + reqData.claim_id + ' and err ' + err);
    });
}

function get_all_claims(callback) {
    _claimModel2.default.find({}).then(function (data) {
        callback(data);
    }).catch(function (err) {
        console.log('err while fetching all claims ' + err);
    });
}