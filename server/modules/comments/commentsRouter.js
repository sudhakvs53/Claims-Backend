import commentsHandler from './commentHandler';

export default (router) => {
    router.get('/get_project_comments', (req, res) => {
        commentsHandler.get_project_comments({ project_title: req.get('project_title') }, (resData) => {
            res.json(resData);
        });
    });

    router.get('/get_claim_comments', (req, res) => {
        commentsHandler.get_claim_comments({ claim_name: req.get('claim_name') }, (resData) => {
            res.json(resData);
        });
    });

    router.post('/add_comment', (req, res) => {
        commentsHandler.insert_comment(req.body, (isSuccess) => {
            if (isSuccess)
                res.sendStatus(200);
            else {
                res.send({ error: "insert comment failed" });
            }
        });
    });
};