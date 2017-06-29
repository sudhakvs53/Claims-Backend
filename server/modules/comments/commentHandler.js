import commentModel from './commentModel';

export default {
    get_project_comments,
    get_claim_comments,
    insert_comment
};


function get_project_comments(reqData, callback) {
    commentModel.find({ project_title: reqData.project_title }).then((resData) => {
        callback(resData);
    }).catch((err) => {
        console.log('err while get_project_comments call ' + err);
        callback(false);
    });
}


function get_claim_comments(reqData, callback) {
    commentModel.find({ claim_name: reqData.claim_name }).then((resData) => {
        callback(resData);
    }).catch((err) => {
        console.log('err while get_claim_comments call ' + err);
        callback(false);
    });
}


function insert_comment(reqData, callback) {
    const newComment = new commentModel({
        claim_id: reqData.claim_id,
        claim_name: reqData.claim_name,
        project_title: reqData.project_title,
        commented_by: reqData.commented_by,
        commented_on: reqData.commented_on,
        comment_text: reqData.comment_text
    });

    newComment.save().then((resData) => {
        callback(resData);
    }).catch((err) => {
        console.log('err while insert_comment call ' + err);
        callback(false);
    });
}