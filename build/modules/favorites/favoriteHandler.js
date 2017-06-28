'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _favoriteModel = require('./favoriteModel');

var _favoriteModel2 = _interopRequireDefault(_favoriteModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    create_userFavorite: create_userFavorite,
    get_userFavorites: get_userFavorites,
    insert_userFavorite: insert_userFavorite,
    remove_userFavorite: remove_userFavorite
};


function create_userFavorite(reqData, callback) {
    var newUserFavorite = new _favoriteModel2.default({
        user_id: reqData.user_id,
        user_favorites: reqData.user_favorites
    });

    newUserFavorite.save().then(function (resData) {
        callback(resData);
    }).catch(function (err) {
        console.log('err while insert_userFavorite call ' + err);
        callback(false);
    });
}

function get_userFavorites(reqData, callback) {
    console.log(2);
    _favoriteModel2.default.find({ user_id: reqData.user_id }).then(function (resData) {
        console.log(3);
        callback(resData);
    }).catch(function (err) {
        console.log('err while get_userFavorite call ' + err);
        callback(false);
    });
}

function insert_userFavorite(reqData, callback) {
    _favoriteModel2.default.update({
        user_id: reqData.user_id
    }, {
        $push: { user_favorites: reqData.favorite_id }
    }).then(function (resData) {
        callback(resData);
    }).catch(function (err) {
        console.log('err while insert_userFavorite call ' + err);
        callback(false);
    });
}

function remove_userFavorite(reqData, callback) {
    _favoriteModel2.default.update({
        user_id: reqData.user_id
    }, {
        $pull: { user_favorites: reqData.favorite_id }
    }).then(function (resData) {
        callback(resData);
    }).catch(function (err) {
        console.log('err while insert_userFavorite call ' + err);
        callback(false);
    });
}