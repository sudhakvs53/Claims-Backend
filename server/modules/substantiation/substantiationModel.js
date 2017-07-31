import mongoose from 'mongoose';
const schema = mongoose.Schema;

const substantiationSchema = new schema({
    substantiation_id: { type: String, required: true },
    claim_id: { type: String, required: true },
    reason: { type: String, required: true },
    supp_docs: [{
        file_id: { type: String },
        file_title: { type: String },
        source: { type: String }
    }]
});

const substantiationModel = mongoose.model('substantiation', substantiationSchema);

export default substantiationModel;