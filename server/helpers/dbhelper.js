import mongoose from 'mongoose';
// const dburl = 'mongodb://dev:dev@ds143201.mlab.com:43201/claimsdb';
// const dburl = 'mongodb://localhost:27017/claimsDB';
import { dev } from './../config';
const dburl = dev.dbUrl.mLabDBurl;

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', () => {
    console.log('error while communicating to database');
});

exports.openConnection = () => {
    return mongoose.connect(dburl, (err) => {
        if (err) {
            return console.log('err while connecting to db' + err);
        } else {
            console.log('db connected');
        }
    });
};

exports.closeConnection = () => {
    console.log('here');
    db.close().then(() => {
        console.log('db disconnected');
    });
};