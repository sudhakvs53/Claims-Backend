import substantiationHandler from './substantiationHandler';
import claimsHandler from './../claims/claimsHandler';

export default (router) => {


    router.post('/create_substantiation', async(req, res, next) => {
        try {
            const resSubsData = await substantiationHandler.create_substantiation(req.body);
            // await claimsHandler.add_claim_substantiation(req.body.claim_id, resSubsData.substantiation_id);
            res.status(200).send({ substantiation_id: resSubsData.substantiation_id });
        } catch (error) {
            next(error.message);
        }
    });


    router.post('/update_substantiation', async(req, res, next) => {
        try {
            await substantiationHandler.update_substantiation(req.body);
            res.status(200).send(`Substantiation updated successfully`);
        } catch (error) {
            next(error.message);
        }
    });


    router.post('/delete_substantiation', async(req, res, next) => {
        try {
            await substantiationHandler.delete_substantiation(req.body.substantiation_id);
            // await claimsHandler.delete_claim_substantiation(req.body.claim_id, resSubsData.substantiation_id);
            res.status(200).send(`Substantiation deleted successfully`);
        } catch (error) {
            next(error.message);
        }
    });


    router.post('/edit_claim', async(req, res, next) => {
        try {
            await substantiationHandler.duplicate_substantiation(req.body.claim_id);
            res.status(200).send(`Claim edit action is activated`);
        } catch (error) {
            next(error.message);
        }
    });


    router.post('/edit_cancel_claim', async(req, res, next) => {
        try {
            await substantiationHandler.flush_duplicate_substantiation(req.body.claim_id);
            res.status(200).send(`Claim edit action has been closed`);
        } catch (error) {
            next(error.message);
        }
    });



    // router.post('/edit_claim_create_substantiation', async(req, res) => {
    //     try {
    //         const resSubsData = await substantiationHandler.edit_claim_create_substantiation(req.body);
    //         // await claimsHandler.add_claim_substantiation(req.body.claim_id, resSubsData.substantiation_id);
    //         res.status(200).send({ substantiation_id: resSubsData.substantiation_id });
    //     } catch (error) {
    //         next(error.message);
    //     }
    // });


    // router.post('/edit_claim_update_substantiation', async(req, res) => {
    //     try {
    //         await substantiationHandler.edit_claim_update_substantiation(req.body);
    //         res.status(200).send(`Claim updated successfully`);
    //     } catch (error) {
    //         next(error.message);
    //     }
    // });


    // router.post('/edit_claim_delete_substantiation', async(req, res) => {
    //     try {
    //         const resSubsData = await substantiationHandler.edit_claim_delete_substantiation(req.body.substantiation_id);
    //         // await claimsHandler.delete_claim_substantiation(req.body.claim_id, resSubsData.substantiation_id);
    //         res.status(200).send(`Substantiation deleted successfully`);
    //     } catch (error) {
    //         next(error.message);
    //     }
    // });


    // router.get('/get_project_claims', (req, res, next) => {

    // });

    // router.get('/get_claims_by_pagination', (req, res, next) => {

    // });

    // router.get('/get_claims_by_filter', (req, res, next) => {

    // });

};