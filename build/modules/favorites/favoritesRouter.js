'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commentsRouter = require('./../comments/commentsRouter');

var _commentsRouter2 = _interopRequireDefault(_commentsRouter);

var _favoriteHandler = require('./favoriteHandler');

var _favoriteHandler2 = _interopRequireDefault(_favoriteHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commentsRouter2.default.post('/create_userFavorite', function (req, res) {
    console.log(1);
    _favoriteHandler2.default.create_userFavorite(req.body, function (isSuccess) {
        console.log(isSuccess);
        if (isSuccess) res.sendStatus(200);
    });
});

_commentsRouter2.default.get('/get_userFavorites', function (req, res) {
    _favoriteHandler2.default.get_userFavorites({ user_id: req.get('user_id') }, function (resData) {
        res.json(resData);
    });
});

_commentsRouter2.default.post('/insert_userFavorite', function (req, res) {
    _favoriteHandler2.default.insert_userFavorite(req.body, function (isSuccess) {
        if (isSuccess) res.sendStatus(200);
    });
});

_commentsRouter2.default.post('/remove_userFavorite', function (req, res) {
    _favoriteHandler2.default.remove_userFavorite(req.body, function (isSuccess) {
        if (isSuccess) res.sendStatus(200);
    });
});

exports.default = _commentsRouter2.default;