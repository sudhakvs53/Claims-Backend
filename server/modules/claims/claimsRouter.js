import claimsHandler from './claimsHandler';
import projectHandler from './../projects/projectHandler';

// let appStatus = [];
// appStatus = ['In Progress','Ready For Approval'];

// commonHandler.get_app_status(app_id, (appStatusRes) => {
//     appStatus = appStatusRes.data;
// });

export default (router) => {

    router.post('/create_claim', (req, res) => {
        claimsHandler.create_claim(req.body.claim, (createClaimRes) => {
            if (createClaimRes.success)
                res.status(200).send({ claim_id: createClaimRes.claim_id });
            else {
                res.status(500).send(createClaimRes.errorMsg);
            }
        });
    });


    router.post('/update_claim', (req, res) => {
        projectHandler.check_dirty_status(req.body.claim.proj_id).then((statusCheckRes) => {
            console.log(statusCheckRes);
        }).catch((err) => {
            console.log('err while checking status ' + err);
        });
        // claimsHandler.update_claim();
        // projectHandler.update_project_status();
        // claimsHandler.update_claim(req.body, (createClaimRes) => {
        //     if (createClaimRes.success)
        //         res.status(200).send({ claim_id: createClaimRes.claim_id });
        //     else {
        //         res.status(500).send(createClaimRes.errorMsg);
        //     }
        // });
    });


    router.get('/get_project_claims', (req, res) => {

    });

    router.post('/get_all_claims', (req, res) => {

    });

    router.post('/update_substantiation', (req, res) => {

    });

};