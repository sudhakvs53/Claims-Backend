import claimModel from './claimModel';

export default {
    create_claim,
    update_claim
    // get_project_claims,
    // get_all_claims,
    // update_substantiation
};


function create_claim(reqData, callback) {
    const newClaim = new claimModel({
        claim_id: 'CLM' + 'TS' + Date.now() + 'R' + Math.floor(Math.random() * 100),
        claim_name: reqData.claim_name,
        benefit_area: reqData.benefit_area,
        proj_id: reqData.proj_id,
        region: reqData.region,
        exception: reqData.exception,
        formula: reqData.formula,
        substantiation: reqData.substantiation,
        created_by: reqData.created_by,
        created_on: reqData.created_on,
        mod_by: reqData.mod_by,
        mod_on: reqData.mod_on
    });

    newClaim.save().then((resData) => {
        callback({ claim_id: resData.claim_id, success: true });
    }).catch((err) => {
        console.log('err while inserting claim ' + err);
        callback({ errorMsg: err.message, success: false });
    });
}


function update_claim(reqData, callback) {
    claimModel.update({ claim_id: reqData.claim_id }, reqData).then((resData) => {
        callback({ claim_id: resData.claim_id, success: true });
    }).catch((err) => {
        console.log('err while updating claim ' + err);
        callback({ errorMsg: err.message, success: false });
    });
}