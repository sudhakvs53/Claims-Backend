'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _mongoose2.default.Schema;

var claimSchema = new schema({
    claim_name: { type: String, required: true },
    claim_type: { type: String, required: true },
    prod_form_name: { type: String, required: true },
    need_state_name: { type: String, required: true },
    benefit_area_name: { type: String, required: true },
    claim_status: { type: String, required: true },
    // proj_id: { type: String, required: true },
    proj_title: { type: String, required: true },
    claim_version: { type: Number, default: '0.0' },
    region: [{
        region_id: { type: String, required: true, unique: true },
        region_name: { type: String }
    }],
    exception: { type: String },
    formula: [{
        formula_id: { type: String, required: true },
        formula_spec: { type: String, required: true },
        lab_notebook_id: { type: String, required: true },
        region: { type: String, required: true },
        prod_name: { type: String },
        proj_name: { type: String }
    }],
    substantiation: [{
        reason: { type: String, required: true },
        supp_doc_id: [{
            file_name: { type: String }
        }]
    }],
    approved_by: { type: String },
    approved_on: { type: Date },
    // comments: [{
    //     claim_id: { type: String, required: true },
    //     claim_name: { type: String, required: true },
    //     commented_by: { type: String, required: true },
    //     commented_on: { type: Date },
    //     comment_text: { type: String }
    // }],
    created_on: { type: Date },
    created_by: { type: String, required: true },
    mod_by: { type: String },
    mod_dt: { type: Date }
});

var claimModel = _mongoose2.default.model('claim', claimSchema);

exports.default = claimModel;