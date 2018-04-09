import mongoose from 'mongoose';
const schema = mongoose.Schema;

const commentSchema = new schema({
    claim_id: { type: String, required: true },
    comment_id: { type: String, required: true },
    claim_name: { type: String, required: true },
    project_title: { type: String, required: true },
    commented_by: { type: String, required: true },
    commented_on: { type: Date },
    comment_text: { type: String, required: true }
});

const commentModel = mongoose.model('comments', commentSchema);

export default commentModel;