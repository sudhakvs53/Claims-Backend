'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _claimsHandler = require('./claimsHandler');

var _claimsHandler2 = _interopRequireDefault(_claimsHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

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

exports.default = router;