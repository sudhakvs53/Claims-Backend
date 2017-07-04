import projectHandler from './projectHandler';

export default (router) => {
    router.get('/get_all_projects', (req, res) => {
        projectHandler.get_all_projects((resData) => {
            res.json(resData);
        });
    });

    router.post('/delete_project', (req, res) => {
        projectHandler.delete_project(req.body, (IsSuccess) => {
            if (IsSuccess)
                res.sendStatus(200);
            else {
                res.status(500).send('delete project failed');
            }
        });
    });

    router.post('/insert_project', (req, res) => {
        projectHandler.check_project(req.body).then((resData) => {
            if (resData.length > 0)
                res.status(400).send('Project already exists');
            else {
                projectHandler.insert_project(req.body, (IsSuccess) => {
                    if (IsSuccess)
                        res.sendStatus(200);
                    else {
                        res.status(500).send('insert project failed');
                    }
                });
            }
        });

    });
};