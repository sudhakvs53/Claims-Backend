import claimsHandler from './claimsHandler';
import projectHandler from './../projects/projectHandler';
import substantiationHandler from './../substantiation/substantiationHandler';

export default (router) => {


    router.post('/create_claim', async(req, res, next) => {
        try {
            const resClaimData = await claimsHandler.create_claim(req.body); -
            res.status(200).send({ claim_id: resClaimData.claim_id });
        } catch (error) {
            next(error.message);
        }
    });


    // can optimize code, take check_dirty_status into handler, internal call, rename appropriately
    router.post('/update_project_status', async(req, res, next) => {
        try {
            const projectArr = await claimsHandler.check_dirty_status(req.body.project_id);
            if (claimsHandler.check_duplicate_status(projectArr, req.body.project_status)) {
                next('Project already updated to requested state !');
            } else {
                await claimsHandler.update_project_status(req.body.project_id, req.body.project_status);
                res.status(200).send('Project status updated successfully');
            }
        } catch (error) {
            next(error.message);
        }
    });


    router.post('/update_claim', async(req, res, next) => {
        try {
            await substantiationHandler.commit_substantiation(req.body.claim_id);
            await claimsHandler.update_claim(req.body);
            res.status(200).send(`Claim updated successfully`);
        } catch (error) {
            next(error.message);
        }
    });



    router.post('/delete_claim', async(req, res, next) => {
        try {
            const resDelClaim = await claimsHandler.delete_claim(req.body.claim_id);
            await projectHandler.delete_project_claim(req.body.project_id, resDelClaim.claim_id);
            res.status(200).send(`Claim deleted successfully`);
        } catch (error) {
            next(error.message);
        }
    });


    router.get('/get_claim_names', async(req, res, next) => {
        try {
            const resData = await claimsHandler.get_claim_names();
            res.status(200).send(resData);
        } catch (error) {
            next(error.message);
        }
    });


    router.get('/get_project_claims', async(req, res, next) => {
        try {
            const resData = await claimsHandler.get_project_claims(req.get("project_id"));
            res.status(200).send(resData);
        } catch (error) {
            next(error.message);
        }
    });


    router.get('/get_claims_by_pagination', async(req, res, next) => {
        try {
            const totalCount = await claimsHandler.get_claims_count();
            const resData = await claimsHandler.get_claims_by_pagination(parseInt(req.get("pageNumber")), parseInt(req.get("pageSize")));
            res.status(200).send({ claimsList: resData, totalRecords: totalCount });
        } catch (error) {
            next(error.message);
        }
    });


    router.post('/get_claims', async(req, res, next) => {
        try {
            const resData = await claimsHandler.get_claims(req.body.filterList, req.body.pageNumber, req.body.pageSize);
            const totalCount = await claimsHandler.get_claims_count(req.body.filterList);
            res.status(200).send({ claimsList: resData, totalRecords: totalCount });
        } catch (error) {
            next(error.message);
        }
    });


};