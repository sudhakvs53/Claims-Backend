import mongoose from 'mongoose';
const schema = mongoose.Schema;

const claimSchema = new schema({
    claim_id: { type: String, required: true },
    claim_name: { type: String, required: true },
    benefit_area: { type: String, required: true },
    proj_id: { type: String, required: true },
    region: [{ type: String, required: true }],
    exception: { type: String },
    formula: [{
        formula_id: { type: String, required: true },
        formula_spec: { type: String, required: true },
        lab_notebook_id: { type: String, required: true },
        region: { type: String, required: true },
        prod_form: { type: String },
        proj_id: { type: String }
    }],
    substantiation: [{
        reason: { type: String, required: true },
        supp_doc_id: [{
            file_id: { type: String },
            file_title: { type: String },
            source: { type: String }
        }]
    }],
    created_on: { type: Date, default: Date.now },
    created_by: { type: String },
    approved_by: { type: String },
    approved_on: { type: Date },
    mod_by: { type: String },
    mod_on: { type: Date }
});

const claimModel = mongoose.model('claim', claimSchema);

export default claimModel;