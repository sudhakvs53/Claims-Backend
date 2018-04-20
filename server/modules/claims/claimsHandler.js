import claimsModel from './claimsModel';
import projectModel from './../projects/projectModel';


export default {
    check_dirty_status,
    check_duplicate_status,
    update_project_status,

    create_claim,
    update_claim,
    delete_claim,
    get_claim_names,
    //get_claim_details,
    get_project_claims,
    getAllClaims,
    // get_claims_by_pagination,
    get_claims,
    get_claims_count,
    search
};


async function check_dirty_status(project_id) {
    return projectModel.find({ project_id: project_id });
}


function check_duplicate_status(project_arr, status) {
    for (let i = 0; i < project_arr.length; i++) {
        if (project_arr[i].project_status === status) {
            return true;
        }
    }
    return false;
}


async function update_project_status(project_id, project_status) {
    await projectModel.update({ project_id: project_id }, {
        $set: { project_status: project_status }
    }, { multi: true });

    return claimsModel.update({ project_id: project_id }, {
        $set: { project_status: project_status }
    }, { multi: true });
}


async function create_claim(claimData) {

    const newClaim = new claimsModel({
        claim_id: (claimData.claim_id !== "") ? 'CLM' + 'TS' + Date.now() + 'R' + Math.floor(Math.random() * 100) : claimData.claim_id,
        claim_name: claimData.claim_name,
        benefit_area: claimData.benefit_area,
        project_id: claimData.project_id,
        region: claimData.region,
        exception: claimData.exception,
        formula: claimData.formula,
        substantiation: claimData.substantiation,
        created_by: claimData.created_by,
        created_on: claimData.created_on,
        modified_by: claimData.modified_by,
        modified_on: claimData.modified_on,

        project_id: claimData.project_id,
        project_title: claimData.project_title,
        need_state: claimData.need_state,
        product_form: claimData.product_form,
        claim_type: claimData.claim_type,
        project_status: claimData.project_status
    });

    const resData = await newClaim.save();
    //await book.on('es-indexed', function(err, res) {});
    return resData;
}


async function delete_claim(claim_id) {
    return projectModel.find({ 'claim_id': claim_id }).remove();
}


async function update_claim(reqData) {
    return claimsModel.update({ 'claim_id': reqData.claim_id }, reqData);
}


function search(searchTerm, callback) {
    claimsModel.search({
        query_string: { query: searchTerm }
    }, { hydrate: true }, function (err, resData) {
        if (err) {
            console.log(err);
        }
        callback(resData);
    });
}

async function get_claim_names() {
    return claimsModel.find({}, { '_id': 0, 'claim_name': 1, 'benefit_area': 1 });
}

// async function get_claim_details(claim_id) {
//     return claimsModel.find({ 'claim_id': claim_id }, { '_id': 0, 'claim_id':1, 'claim_name': 1, 'benefit_area': 1, 'region': 1  });
// }


async function get_project_claims(project_id) {
    return claimsModel.find({ 'project_id': project_id }, { '_id': 0 });
}

async function getAllClaims() {
    return claimsModel.find({ 'benefit_area': "Cleansing" });
}

async function get_claims_count(filterList) {
    let qry = { $and: [] };
    qry = buildquery(qry, filterList);
    return claimsModel.find(qry).count();
}


// async function get_claims_by_pagination(pageNumber, pageSize) {
//     return claimsModel.find({}, { '_id': 0 }, { 'skip': pageNumber * pageSize, 'limit': pageSize });
// }


function buildquery(qry, filterList) {
    for (let i = 0; i < filterList.length; i++) {
        // console.log(filterList[i].key);
        // if (filterList[i].key == 'need_state') {
        //     qry.$and.push({
        //         'need_state': filterList[i].value
        //     });
        // } else if (filterList[i].key == 'claim_type') {
        //     qry.$and.push({
        //         'claim_type': filterList[i].value
        //     });
        // } else if (filterList[i].key == 'project_status') {
        //     qry.$and.push({
        //         'project_status': filterList[i].value
        //     });
        // }
        switch (filterList[i].key) {
            case 'need_state':
                qry.$and.push({
                    'need_state': filterList[i].value
                });
                break;
            case 'claim_type':
                qry.$and.push({
                    'claim_type': filterList[i].value
                });
                break;
            case 'project_status':
                qry.$and.push({
                    'project_status': filterList[i].value
                });
                break;
            default:
                break;
        }
    }
    return qry;
}


async function get_claims(filterList, pageNumber, pageSize) {
    if (filterList.length > 0) {
        let qry = { $and: [] };
        qry = buildquery(qry, filterList);
        console.log(qry);
        return claimsModel.find(qry, { '_id': 0 }, { 'skip': pageNumber * pageSize, 'limit': pageSize });
    } else {
        return claimsModel.find({}, { '_id': 0 });
    }
}