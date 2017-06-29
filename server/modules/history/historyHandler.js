import historyModel from './historyModel';

export default {
    get_project_history,
    get_claim_history,
    insert_history
};

function get_project_history(reqData, callback) {
    historyModel.find({}).then((resData) => {
        callback(resData);
    }).catch((err) => {
        console.log('err while get_all_history call ' + err);
        callback(false);
    });
}

function get_claim_history(reqData, callback) {
    historyModel.find({}).then((resData) => {
        callback(resData);
    }).catch((err) => {
        console.log('err while get_claim_history call ' + err);
        callback(false);
    });
}

function insert_history(reqData, callback) {
    const newHistory = new historyModel({
        claim_name: reqData.claim_name,
        claim_id: reqData.claim_id,
        description: reqData.description,
        date: reqData.date
    });

    newHistory.save().then((resData) => {
        callback(resData);
    }).catch((err) => {
        console.log('err while get_claim_history call ' + err);
        callback(false);
    });
}