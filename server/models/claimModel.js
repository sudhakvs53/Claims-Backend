import mongoose from 'mongoose';
const schema = mongoose.Schema;

const claimSchema = new schema({
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
        region_name: { type: String },
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
    mod_dt: { type: Date },
    // history: [{
    //     claim_name: { type: String },
    //     claim_id: { type: String, required: true },
    //     description: { type: String },
    //     date: { type: Date }
    // }]
});

const claimModel = mongoose.model('claim', claimSchema);

export default claimModel;