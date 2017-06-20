import mongoose from 'mongoose';
const schema = mongoose.Schema;

const substantiationSchema = new schema({
    reason: { type: String, required: true },
    supp_doc: [{
        file_id: { type: String },
        file_title: { type: String },
        source: { type: String }
    }]
});

const substantiationModel = mongoose.model('substantiation', substantiationSchema);

export default substantiationModel;