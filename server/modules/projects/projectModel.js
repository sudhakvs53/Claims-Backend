import mongoose from 'mongoose';
const schema = mongoose.Schema;

const projectSchema = new schema({
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

const projectModel = mongoose.model('project', projectSchema);

export default projectModel;