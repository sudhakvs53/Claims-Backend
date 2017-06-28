'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _mongoose2.default.Schema;

var projectSchema = new schema({
    project_title: { type: String, required: true },
    need_state: { type: String },
    prod_form: { type: String },
    claim_type: { type: String },
    project_status: { type: String },
    version: { type: String, default: '0.0' },
    created_by: { type: String },
    created_on: { type: Date, default: Date.now },
    mod_by: { type: String },
    mod_on: { type: Date, default: Date.now }
});

var projectModel = _mongoose2.default.model('project', projectSchema);

exports.default = projectModel;