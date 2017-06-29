import mongoose from 'mongoose';
const schema = mongoose.Schema;

const userFavoriteSchema = new schema({
    user_id: { type: String, required: true },
    user_favorites: [
        { type: String }
    ]
});

const userFavoriteModel = mongoose.model('userfavorites', userFavoriteSchema);

export default userFavoriteModel;