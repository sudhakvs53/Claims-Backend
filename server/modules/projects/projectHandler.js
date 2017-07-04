import projectModel from './projectModel';

export default {
    get_all_projects,
    check_project,
    delete_project,
    insert_project
};

function get_all_projects(callback) {
    projectModel.find({}).then((data) => {
        callback(data);
    }).catch((err) => {
        console.log('err in get_projects ' + err);
    });
}

function check_project(reqData) {
    return projectModel.find({
        project_title: reqData.project_title,
        prod_form: reqData.prod_form,
        need_state: reqData.need_state,
        claim_type: reqData.claim_type
    });
}

function delete_project(reqData, callback) {
    projectModel.find({ project_title: reqData.project_title }).remove().then((resData) => {
        console.log(resData);
        callback(resData);
    });
}

function insert_project(reqData, callback) {
    const newProj = new projectModel({
        project_title: reqData.project_title,
        need_state: reqData.need_state,
        prod_form: reqData.prod_form,
        claim_type: reqData.claim_type,
        created_by: reqData.created_by,
        created_on: reqData.created_on,
        mod_by: reqData.mod_by,
        mod_on: reqData.mod_on
    });

    newProj.save().then((resData) => {
        callback(resData.id);
    }).catch((err) => {
        console.log('err while inserting project ' + err);
        callback(false);
    });
}