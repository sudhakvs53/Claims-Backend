'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apiRouter = require('./apiRouter');

var _apiRouter2 = _interopRequireDefault(_apiRouter);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_apiRouter2.default.get('/admin_control', function (req, res) {
    res.sendFile(_path2.default.resolve('./src/admin.html'));
});

exports.default = _apiRouter2.default;