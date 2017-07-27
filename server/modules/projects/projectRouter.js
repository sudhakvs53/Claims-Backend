import projectHandler from './projectHandler';

export default (router) => {


    router.post('/create_project', async(req, res, next) => {
        try {
            const chkProjectRes = await projectHandler.check_project(req.body);
            if (chkProjectRes.length > 0) {
                next({ status: 400, message: error.message });
            } else {
                const createProjRes = await projectHandler.create_project(req.body);
                res.status(500).send({ proj_id: createProjRes.proj_id });
            }
        } catch (error) {
            next({ status: 500, message: error.message });
        }
    });


    router.get('/get_all_projectTitles', async(req, res, next) => {
        try {
            const resData = await projectHandler.get_all_projectTitles();
            res.status(200).send(resData);
        } catch (error) {
            next(error.message);
        }
    });


    router.post('/delete_project', async(req, res, next) => {
        try {
            await projectHandler.delete_project(req.body);
            res.status(200).send('Delete successful');
        } catch (error) {
            next({ status: 500, message: error.message });
        }
    });


    router.post('/update_project_status', async(req, res, next) => {
        try {
            await projectHandler.update_project_status(req.body.proj_id, req.body.status);
            res.status(200).send('Project status updated successfully');
        } catch (error) {
            next({ status: 500, message: error.message });
        }
    });

};