import projectModel from './projectModel';

export default {
    check_project,
    create_project,
    get_projectTitles,
    get_project_details
};

async function check_project(reqData) {
    return projectModel.find({
        project_title: reqData.project_title,
        product_form: reqData.product_form,
        need_state: reqData.need_state,
        claim_type: reqData.claim_type
    });
}

async function create_project(reqData) {
    const newProj = new projectModel({
        project_id: 'PROJECT' + 'TS' + Date.now() + 'R' + Math.floor(Math.random() * 100),
        project_title: reqData.project_title,
        need_state: reqData.need_state,
        product_form: reqData.product_form,
        claim_type: reqData.claim_type,
        project_status: reqData.project_status,
        created_by: reqData.created_by,
        created_on: reqData.created_on,
        modified_by: reqData.modified_by,
        modified_on: reqData.modified_on
    });

    return newProj.save();
}


async function get_projectTitles() {
    return projectModel.find({}, { '_id': 0, 'project_id': 1, 'project_title': 1 });
}


async function get_project_details(project_id) {
    return projectModel.find({ project_id: project_id });
}




// ====================== DELETE LATER ON ======================================= //

// async function update_project_status(project_id, project_status) {
//     return projectModel.update({ project_id: project_id }, {
//         $set: { project_status: project_status }
//     });
// }


// async function check_dirty_status(project_id) {
//     return projectModel.find({ project_id: project_id });
// }


// async function add_project_claim(project_id, claim_id) {
//     return projectModel.update({ project_id: project_id }, {
//         $push: { claim_id }
//     });
// }


// async function delete_project_claim(project_id, claim_id) {
//     return projectModel.update({ project_id: project_id }, {
//         $pull: { claim_id }
//     });
// }