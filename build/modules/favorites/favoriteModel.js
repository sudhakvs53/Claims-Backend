'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _mongoose2.default.Schema;

var userFavoriteSchema = new schema({
    user_id: { type: String, required: true },
    user_favorites: [{ type: String }]
});

var userFavoriteModel = _mongoose2.default.model('userfavorites', userFavoriteSchema);

exports.default = userFavoriteModel;