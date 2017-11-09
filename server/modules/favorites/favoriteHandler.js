import favoriteModel from './favoriteModel';

export default {
    create_userFavorite,
    get_userFavorites,
    insert_userFavorite,
    remove_userFavorite
};


function create_userFavorite(reqData, callback) {
    const newFavorite = new favoriteModel({
        user_id: reqData.user_id,
        user_favorites: reqData.user_favorites
    });
    console.log(2);
    newFavorite.save().then((resData) => {
        console.log(3);
        callback(resData);
    }).catch((err) => {
        console.log('err while insert_userFavorite call ' + err);
        callback(false);
    });
}


function get_userFavorites(reqData, callback) {
    favoriteModel.find({ user_id: reqData.user_id }).then((resData) => {
        callback(resData);
    }).catch((err) => {
        console.log('err while get_userFavorite call ' + err);
        callback(false);
    });
}


function insert_userFavorite(reqData, callback) {
    favoriteModel.update({
        user_id: reqData.user_id
    }, {
        $push: { user_favorites: reqData.favorite_id }
    }).then((resData) => {
        callback(resData);
    }).catch((err) => {
        console.log('err while insert_userFavorite call ' + err);
        callback(false);
    });
}


function remove_userFavorite(reqData, callback) {
    favoriteModel.update({
        user_id: reqData.user_id
    }, {
        $pull: { user_favorites: reqData.favorite_id }
    }).then((resData) => {
        callback(resData);
    }).catch((err) => {
        console.log('err while insert_userFavorite call ' + err);
        callback(false);
    });
}