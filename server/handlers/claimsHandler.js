import claimModel from './../models/claimsModel';

export default {
    create_claim: create_claim,
    search_by_projectId: search_by_projectId,
    save_claim: save_claim
};

const create_claim = (newClaim) => {
    newClaim.save((err) => {
        if (err) {
            console.log('err while creating claim ' + err);
        } else {
            console.log('claim created successfully');
        }
    });
};

const search_by_projectId = (projID, callback) => {
    claimModel.find({ 'proj_id': projID }, (err, data) => {
        if (err) {
            console.log('err while searching by project id ' + err);
        } else {
            callback(data);
        }
    });
};

const save_claim = (newClaim, callback) => {
    newClaim.save((err) => {
        if (err) {
            console.log('err while saving claim ' + err);
            callback(false);
        } else {
            console.log('claim saved successfully');
            callback(true);
        }
    });
};