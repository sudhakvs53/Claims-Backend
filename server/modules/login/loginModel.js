import mongoose from 'mongoose';
const schema = mongoose.Schema;

const loginSchema = new schema({
    user_id: { type: String, required: true },
    password: { type: String, required: true }
});

const loginModel = mongoose.model('login', loginSchema);

export default loginModel;