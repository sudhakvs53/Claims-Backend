import mongoose from 'mongoose';
const schema = mongoose.Schema;

const projectSchema = new schema({
    project_id: { type: String, required: true },
    project_title: { type: String, required: true },
    need_state: { type: String, required: true },
    product_form: { type: String },
    claim_type: { type: String, required: true },
    project_status: { type: String },
    project_version: { type: String, default: '0.0' },
    claims: [{ type: String }],
    created_by: { type: String },
    created_on: { type: Date, default: Date.now },
    modified_by: { type: String },
    modified_on: { type: Date }
});

const projectModel = mongoose.model('project', projectSchema);

export default projectModel;