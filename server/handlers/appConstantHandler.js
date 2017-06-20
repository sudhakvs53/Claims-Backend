import appConstantModel from './../models/appConstantModel';

export default {
    get_application_constants
};

function get_application_constants(callback) {

    appConstantModel.find({}).then((data) => {
        callback(data);
    }).catch((err) => {
        console.log('err while fetching application constants ' + err);
    });

};