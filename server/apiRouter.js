import express from 'express';
import claimsHandler from './handlers/claimsHandler';
import appConstantHandler from './handlers/appConstantHandler';

const router = express.Router();

router.get('/get_application_constants', (req, res) => {
    appConstantHandler.get_application_constants((data) => {
        res.json(data);
    });
});

router.get('/get_all_claims', (req, res) => {

    claimsHandler.get_all_claims((resData) => {
        res.json(resData);
    });
});

router.post('/insert_claim_details', (req, res) => {
    claimsHandler.insert_claim_details(req.body, (isSuccess) => {
        if (isSuccess)
            res.sendStatus(200);
    });
});

router.post('/insert_claim_formulas', (req, res) => {
    claimsHandler.insert_claim_formulas(req.body, () => {
        res.sendStatus(200);
    });
});

export default router;