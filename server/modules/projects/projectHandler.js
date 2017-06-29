import projectModel from './projectModel';

export default {
    get_all_projects,
    // check_project,
    insert_project
};

function get_all_projects(callback) {
    projectModel.find({}).then((data) => {
        callback(data);
    }).catch((err) => {
        console.log('err in get_projects ' + err);
    });
}

function insert_project(reqData, callback) {
    const newProj = new projectModel({
        project_title: reqData.project_title,
        need_state: reqData.need_state,
        prod_form: reqData.prod_form,
        claim_type: reqData.claim_type,
        project_status: 'In Progress',
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