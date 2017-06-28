'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _claimsRouter = require('./../claims/claimsRouter');

var _claimsRouter2 = _interopRequireDefault(_claimsRouter);

var _commentHandler = require('./commentHandler');

var _commentHandler2 = _interopRequireDefault(_commentHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_claimsRouter2.default.get('/get_project_comments', function (req, res) {
    _commentHandler2.default.get_project_comments({ project_title: req.get('project_title') }, function (resData) {
        res.json(resData);
    });
});

_claimsRouter2.default.get('/get_claim_comments', function (req, res) {
    _commentHandler2.default.get_claim_comments({ claim_name: req.get('claim_name') }, function (resData) {
        res.json(resData);
    });
});

_claimsRouter2.default.post('/insert_comment', function (req, res) {
    _commentHandler2.default.insert_comment(req.body, function (isSuccess) {
        if (isSuccess) res.sendStatus(200);else {
            res.send({ error: "insert comment failed" });
        }
    });
});

exports.default = _claimsRouter2.default;