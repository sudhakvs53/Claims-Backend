'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _mongoose2.default.Schema;

var commentSchema = new schema({
    claim_id: { type: String, required: true },
    claim_name: { type: String, required: true },
    project_title: { type: String, required: true },
    commented_by: { type: String, required: true },
    commented_on: { type: Date },
    comment_text: { type: String, required: true }
});

var commentModel = _mongoose2.default.model('comments', commentSchema);

exports.default = commentModel;