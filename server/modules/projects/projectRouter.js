import projectHandler from './projectHandler';

export default (router) => {


    // can optimize code, take check_project into handler, internal call
    router.post('/create_project', async(req, res, next) => {
        try {
            const chkProjectRes = await projectHandler.check_project(req.body);
            if (chkProjectRes.length > 0) {
                next(error.message);
            } else {
                const createProjRes = await projectHandler.create_project(req.body);
                res.status(500).send({ project_id: createProjRes.project_id });
            }
        } catch (error) {
            next(error.message);
        }
    });


    router.get('/get_projectTitles', async(req, res, next) => {
        try {
            const resData = await projectHandler.get_projectTitles();
            res.status(200).send(resData);
        } catch (error) {
            next(error.message);
        }
    });


    // ======================== DELETE LATER ===================================================== //

    // router.post('/update_project_status', async(req, res, next) => {

    //     try {
    //         const resIsValid = await projectHandler.check_dirty_status(req.body.project_id);
    //         if (resIsValid[0].project_status === req.body.project_status) {
    //             next('Project already updated to requested state !');
    //         } else {
    //             await projectHandler.update_project_status(req.body.project_id, req.body.project_status);
    //             res.status(200).send('Project status updated successfully');
    //         }
    //     } catch (error) {
    //         next(error.message);
    //     }

    // });

};