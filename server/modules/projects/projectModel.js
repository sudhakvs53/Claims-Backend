import mongoose from 'mongoose';
const schema = mongoose.Schema;

const projectSchema = new schema({
    proj_id: { type: String, required: true },
    proj_title: { type: String, required: true },
    need_state: { type: String, required: true },
    prod_form: { type: String },
    claim_type: { type: String, required: true },
    proj_status: { type: String },
    proj_version: { type: String, default: '0.0' },
    created_by: { type: String },
    created_on: { type: Date, default: Date.now },
    mod_by: { type: String },
    mod_on: { type: Date }
});

const projectModel = mongoose.model('project', projectSchema);

export default projectModel;