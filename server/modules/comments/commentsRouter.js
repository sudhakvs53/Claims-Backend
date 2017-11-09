import commentsHandler from './commentHandler';

export default (router) => {
    router.get('/get_project_comments', async(req, res, next) => {
        try {
            const resData = await commentsHandler.get_project_comments(req.get('project_title'));
            res.status(200).json({ success: true, data: resData });
        } catch (error) {
            next(error.message);
        }
    });

    router.get('/get_claim_comments', async(req, res, next) => {
        try {
            const resData = await commentsHandler.get_claim_comments(req.get('claim_name'));
            res.status(200).json({ success: true, data: resData });
        } catch (error) {
            next(error.message);
        }
    });

    router.post('/add_comment', async(req, res, next) => {
        try {
            await commentsHandler.insert_comment(req.body);
            res.status(200).json({ success: true, data: 'Comment added successfully' });
        } catch (error) {
            next(error.message);
        }
    });
};