import historyModel from './historyModel';

export default {
    get_project_history,
    get_claim_history,
    insert_history
};

async function get_project_history(reqData, callback) {
    historyModel.find({project_title: reqData.project_title}).then((resData) => {
        callback(resData);
    }).catch((err) => {
        callback(false);
    });
}

// async function get_claim_history(reqData, callback) {
//     console.log("reqData.claim_id: "+reqData.claim_id);
//     return historyModel.find({claim_id: reqData.claim_id}).then((resData) => {
//         console.log("resdata: "+resData);
//         //callback(resData);
//     }).catch((err) => {
//         console.log('err while get_claim_history call ' + err);
//         //callback(false);
//     });
// }

async function get_claim_history(claim_id) {
    console.log("claim_id: "+claim_id);
    return historyModel.find({claim_id: claim_id}, { '_id': 0 });
};


async function insert_history(reqData, callback) {
    const newHistory = new historyModel({
        claim_name: reqData.claim_name,
        claim_id: reqData.claim_id,
        description: reqData.description,
        modified_on: reqData.modified_on
    });

    newHistory.save().then((resData) => {
        callback(resData);
    }).catch((err) => {
        console.log('err while insert_history call ' + err);
        callback(false);
    });
}