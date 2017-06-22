import appConstantModel from './../models/appConstantModel';

export default {
    get_application_constants,
    set_application_constant_value,
    del_application_constant_value
};

function get_application_constants(callback) {

    appConstantModel.find({}).then((data) => {
        callback(data);
    }).catch((err) => {
        console.log('err while fetching application constants ' + err);
    });

};

function set_application_constant_value(appConstant, callback) {
    appConstantModel.update({ "name": appConstant.name }, { "$push": { "values": appConstant.value } }).then(() => {
        callback(true);
    }).catch((err) => {
        console.log('err while updating value item ' + err);
        callback(false);
    });
}

function del_application_constant_value(appConstant, callback) {
    appConstantModel.update({ "name": appConstant.name }, { "$pull": { "values": appConstant.value } }).then(() => {
        callback(true);
    }).catch((err) => {
        console.log('err while deleting value item ' + err);
        callback(false);
    });
}