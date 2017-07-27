import projectModel from './projectModel';

export default {
    create_project,
    get_all_projectTitles,
    check_project,
    delete_project,
    update_project_status,
    check_dirty_status
};


async function create_project(reqData, callback) {
    const newProj = new projectModel({
        proj_id: 'PROJ' + 'TS' + Date.now() + 'R' + Math.floor(Math.random() * 100),
        proj_title: reqData.proj_title,
        need_state: reqData.need_state,
        prod_form: reqData.prod_form,
        claim_type: reqData.claim_type,
        proj_status: reqData.proj_status,
        created_by: reqData.created_by,
        created_on: reqData.created_on,
        mod_by: reqData.mod_by,
        mod_on: reqData.mod_on
    });

    newProj.save().then((resData) => {
        callback({ proj_id: resData.proj_id, success: true });
    }).catch((err) => {
        console.log('err while inserting project ' + err);
        callback({ errorMsg: err.message, success: false });
    });
}


async function get_all_projectTitles() {
    return projectModel.find({}, { '_id': 0, 'proj_id': 1, 'proj_title': 1 });
}


async function check_project(reqData) {
    return projectModel.find({
        proj_title: reqData.proj_title,
        prod_form: reqData.prod_form,
        need_state: reqData.need_state,
        claim_type: reqData.claim_type
    });
}


async function delete_project(reqData) {
    return projectModel.find({ proj_title: reqData.proj_title }).remove();
}


async function update_project_status(proj_id, status) {
    projectModel.update({ proj_id: proj_id }, {
        $set: { proj_status: status }
    }).then((resData) => {
        callback({ resData: resData, success: true });
    }).catch((err) => {
        console.log('err while updating project status ' + err);
        callback({ errorMsg: err.message, success: false });
    });
}


async function check_dirty_status(proj_id) {
    return projectModel.find({ proj_id: proj_id });
}