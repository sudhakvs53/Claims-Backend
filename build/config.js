'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var dev = exports.dev = {
    PORT: 8081,
    dbUrl: {
        mLabDBurl: 'mongodb://dev:dev@ds143201.mlab.com:43201/claimsdb',
        abinashLocalDBurl: 'mongodb://localhost:27017/claimsDB',
        mongoAtlasURL: 'mongodb://admin:root@cluster0-shard-00-00-gxp47.mongodb.net:27017,cluster0-shard-00-01-gxp47.mongodb.net:27017,cluster0-shard-00-02-gxp47.mongodb.net:27017/claimsDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
    }
};

var qa = exports.qa = {};

var prod = exports.prod = {};