import projectHandler from './projectHandler';

export default (router) => {

    router.post('/create_project', (req, res) => {
        projectHandler.check_project(req.body).then((resData) => {
            if (resData.length > 0)
                res.status(400).send('Project already exists');
            else {
                projectHandler.create_project(req.body, (createProjRes) => {
                    if (createProjRes.success)
                        res.status(200).send({ proj_id: createProjRes.proj_id });
                    else {
                        res.status(500).send(createProjRes.errorMsg);
                    }
                });
            }
        });
    });


    router.get('/get_all_projectTitles', (req, res) => {
        projectHandler.get_all_projectTitles((getProjTitlesRes) => {
            if (getProjTitlesRes.success)
                res.status(200).send(getProjTitlesRes.resData);
            else {
                res.status(500).send(getProjTitlesRes.errorMsg);
            }
        });
    });

    router.get('/get_all_projectTitles2', (req, res) => {
        projectHandler.get_all_projectTitles((getProjTitlesRes) => {
            if (getProjTitlesRes.success)
                res.status(200).send(getProjTitlesRes.resData);
            else {
                res.status(500).send(getProjTitlesRes.errorMsg);
            }
        });
    });

    router.post('/delete_project', (req, res) => {
        projectHandler.delete_project(req.body, (delProjRes) => {
            if (delProjRes.success)
                res.status(200).send('Delete successful');
            else {
                res.status(500).send(delProjRes.errorMsg);
            }
        });
    });

};