import mongoose from 'mongoose';
const schema = mongoose.Schema;

const substantiationTempSchema = new schema({
    substantiation_id: { type: String, required: true },
    claim_id: { type: String, required: true },
    reason: { type: String, required: true },
    supp_doc_id: [{
        file_id: { type: String },
        file_title: { type: String },
        source: { type: String }
    }]
});

const substantiationTempModel = mongoose.model('substantiationtemps', substantiationTempSchema);

export default substantiationTempModel;