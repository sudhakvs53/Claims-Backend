'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var dev = exports.dev = {
    PORT: 8081,
    dbUrl: {
        mLabDBurl: 'mongodb://dev:dev@ds143201.mlab.com:43201/claimsdb',
        abinashLocalDBurl: 'mongodb://localhost:27017/claimsdb'
    }
};

var qa = exports.qa = {};

var prod = exports.prod = {};