import mongoose from 'mongoose';
const schema = mongoose.Schema;

const claimsSchema = new schema({
    claim_id: { type: String, required: true },
    claim_name: { type: String, required: true },
    benefit_area: { type: String, required: true },
    project_id: { type: String, required: true },
    region: [{ type: String }],
    exception: { type: String },
    formula: [{
        formula_id: { type: String, required: true },
        formula_spec: { type: String },
        lab_notebook_id: { type: String },
        region: { type: String },
        product_form: { type: String },
        project_title: { type: String }
    }],
    substantiation: [{ type: String }],
    created_on: { type: Date, default: Date.now },
    created_by: { type: String },
    modified_by: { type: String },
    modified_on: { type: Date },

    project_id: { type: String, required: true },
    project_title: { type: String, required: true },
    need_state: { type: String, required: true },
    product_form: { type: String },
    claim_type: { type: String, required: true },
    project_status: { type: String },
    project_version: { type: String, default: '0.0' },
});

const claimsModel = mongoose.model('claims', claimsSchema);

export default claimsModel;