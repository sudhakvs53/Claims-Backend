import commentModel from './commentModel';

export default {
    get_project_comments,
    get_claim_comments,
    insert_comment
};


async function get_project_comments(project_title) {
    return commentModel.find({ project_title: project_title });
}


async function get_claim_comments(claim_name) {
    return commentModel.find({ claim_name: claim_name });
}


async function insert_comment(reqData) {
    const newComment = new commentModel({
        claim_id: reqData.claim_id,
        comment_id: reqData.comment_id,
        claim_name: reqData.claim_name,
        project_title: reqData.project_title,
        commented_by: reqData.commented_by,
        commented_on: reqData.commented_on,
        comment_text: reqData.comment_text
    });

    return newComment.save();
}