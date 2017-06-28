'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _mongoose2.default.Schema;

var historySchema = new schema({
    claim_name: { type: String },
    claim_id: { type: String, required: true },
    description: { type: String },
    date: { type: Date }
});

var historyModel = _mongoose2.default.model('history', historySchema);

exports.default = historyModel;