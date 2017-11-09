import mongoose from 'mongoose';
const schema = mongoose.Schema;

const historySchema = new schema({
    claim_name: { type: String },
    history_id: { type: String },
    claim_id: { type: String, required: true },
    description: { type: String },
    modified_on: { type: Date }
});

const historyModel = mongoose.model('history', historySchema);

export default historyModel;