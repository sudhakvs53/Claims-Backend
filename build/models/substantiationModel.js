'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _mongoose2.default.Schema;

var substantiationSchema = new schema({
    reason: { type: String, required: true },
    supp_doc: [{
        file_id: { type: String },
        file_title: { type: String },
        source: { type: String }
    }]
});

var substantiationModel = _mongoose2.default.model('substantiation', substantiationSchema);

exports.default = substantiationModel;