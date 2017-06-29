import router from './../history/historyRouter';
import projectHandler from './projectHandler';


router.get('/get_all_projects', (req, res) => {
    projectHandler.get_all_projects((resData) => {
        res.json(resData);
    });
});

router.post('/insert_project', (req, res) => {
    // projectHandler.check_project(req.body, () => {

    // });
    projectHandler.insert_project(req.body, (IsSuccess) => {
        if (IsSuccess)
            res.sendStatus(200);
        else {
            res.send({ error: "insert project failed" });
        }
    });
});


export default router;