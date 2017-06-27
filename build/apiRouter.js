'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _claimsHandler = require('./handlers/claimsHandler');

var _claimsHandler2 = _interopRequireDefault(_claimsHandler);

var _appConstantHandler = require('./handlers/appConstantHandler');

var _appConstantHandler2 = _interopRequireDefault(_appConstantHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/get_application_constants', function (req, res) {
    _appConstantHandler2.default.get_application_constants(function (data) {
        res.json(data);
    });
});

router.get('/get_all_claims', function (req, res) {

    _claimsHandler2.default.get_all_claims(function (resData) {
        res.json(resData);
    });
});

router.post('/insert_claim_details', function (req, res) {
    _claimsHandler2.default.insert_claim_details(req.body, function (isSuccess) {
        if (isSuccess) res.sendStatus(200);
    });
});

router.post('/insert_claim_formulas', function (req, res) {
    _claimsHandler2.default.insert_claim_formulas(req.body, function () {
        res.sendStatus(200);
    });
});

router.post('/insert_claim_substantiations', function (req, res) {
    _claimsHandler2.default.insert_claim_substantiations(req.body, function () {
        res.sendStatus(200);
    });
});

router.post('/set_application_constant_value', function (req, res) {
    _appConstantHandler2.default.set_application_constant_value(req.body, function (isSuccess) {
        res.send(isSuccess);
    });
});

router.post('/del_application_constant_value', function (req, res) {
    _appConstantHandler2.default.del_application_constant_value(req.body, function (isSuccess) {
        res.send(isSuccess);
    });
});

exports.default = router;