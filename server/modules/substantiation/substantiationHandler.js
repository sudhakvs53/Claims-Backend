import substantiationModel from './substantiationModel';
import substantiationTempModel from './substantiationTempModel';

export default {
    duplicate_substantiation,
    flush_duplicate_substantiation,
    create_substantiation,
    update_substantiation,
    delete_substantiation,
    // edit_claim_create_substantiation,
    // edit_claim_update_substantiation,
    // edit_claim_delete_substantiation,
    commit_substantiation
};


async function duplicate_substantiation(claim_id) {
    const subsResData = await substantiationModel.find({ 'claim_id': claim_id });
    let subsDuplicateModel;
    for (let i = 0; i < subsResData.length; i++) {
        subsDuplicateModel = new substantiationTempModel(subsResData[i]);
        await subsDuplicateModel.save();
    }
}


async function flush_duplicate_substantiation(claim_id) {
    return substantiationTempModel.find({ claim_id: claim_id }).remove();
}


async function create_substantiation(reqData) {
    const newSubstantiation = new substantiationTempModel({
        substantiation_id: 'SUBS' + 'TS' + Date.now() + 'R' + Math.floor(Math.random() * 100),
        claim_id: reqData.claim_id,
        reason: reqData.reason,
        supp_docs: reqData.supp_docs
    });
    return newSubstantiation.save();
}


async function delete_substantiation(substantiation_id) {
    return substantiationTempModel.find({ substantiation_id: substantiation_id }).remove();
}


async function update_substantiation(reqData) {
    return substantiationTempModel.update({ substantiation_id: reqData.substantiation_id }, reqData);
}


async function commit_substantiation(claim_id) {
    const subsResData = await substantiationTempModel.find({ 'claim_id': claim_id });
    if (subsResData.length > 0) {
        let subsDuplicateModel;
        for (let i = 0; i < subsResData.length; i++) {
            subsDuplicateModel = new substantiationModel({
                substantiation_id: subsResData[i].substantiation_id,
                claim_id: subsResData[i].claim_id,
                reason: subsResData[i].reason,
                supp_docs: subsResData[i].supp_docs
            });
            await subsDuplicateModel.save();
        }
    }
    flush_duplicate_substantiation(claim_id);
}

// async function edit_claim_create_substantiation(reqData) {
//     const newSubstantiation = new substantiationTempModel({
//         substantiation_id: 'SUBS' + 'TS' + Date.now() + 'R' + Math.floor(Math.random() * 100),
//         claim_id: claim_id,
//         reason: reqData.reason,
//         supp_docs: reqData.supp_docs
//     });
//     return newSubstantiation.save();
// }


// async function edit_claim_delete_substantiation(substantiation_id) {
//     return substantiationTempModel.find({ substantiation_id: substantiation_id }).remove();
// }


// async function edit_claim_update_substantiation(reqData) {
//     return substantiationTempModel.update({ substantiation_id: reqData.substantiation_id }, reqData);
// }