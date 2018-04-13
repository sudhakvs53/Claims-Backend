import mongoose from 'mongoose';
var config = require('config');
const dburl = config.dbConfig.url;

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', () => {
    console.log('error while communicating to database ');
});

export default {
    openConnection,
    closeConnection
};

function openConnection() {
    return mongoose.connect(dburl, { useMongoClient: true }, (err) => {
        if (err) {
            return console.log('err while connecting to db ' + err);
        } else {
            console.log('db connected');
        }
    });
}

function closeConnection(callback) {
    db.close().then(() => {
        console.log('db disconnected');
        callback();
    });
}