import mongoose from 'mongoose';
const schema = mongoose.Schema;

const appConstantSchema = new schema({
    name: { type: String, required: true, unique: true },
    values: [
        { type: String }
    ]
});

const appConstantModel = mongoose.model('application_constants', appConstantSchema);

export default appConstantModel;