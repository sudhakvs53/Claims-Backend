'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('./config');

var _fileRouter = require('./fileRouter');

var _fileRouter2 = _interopRequireDefault(_fileRouter);

var _dbhelper = require('./helpers/dbhelper');

var _dbhelper2 = _interopRequireDefault(_dbhelper);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ========================== custom modules ==========================
var app = (0, _express2.default)();

// parsing req/res body to json


// ========================== dependecy modules ==========================
app.use(_bodyParser2.default.json({ limit: '50mb' }));

// for parsing the url encoded data using qs library
app.use(_bodyParser2.default.urlencoded({ limit: '50mb', extended: true }));

// routing
app.use(_fileRouter2.default);

app.use('/assets', _express2.default.static(_path2.default.resolve('node_modules')));
app.use('/source', _express2.default.static(_path2.default.resolve('src')));

// open db connection, when successful start application
_dbhelper2.default.openConnection().then(function () {
    app.listen(_config.dev.PORT, function () {
        console.log('server started');
    });
});

// kill process when Ctrl+C is hit
process.on('SIGINT', function () {
    _dbhelper2.default.closeConnection(function () {
        console.log('bye bye !');
        process.exit();
    });
});

exports.default = app;