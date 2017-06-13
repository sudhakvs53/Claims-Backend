import path from 'path';
import express from 'express';
import claimsHandler from './handlers/claimsHandler';

const router = express.Router();

router.get('/fetch/:proj_id', (req, res) => {
    // res.sendFile(path.resolve());
    claimsHandler.search_by_projectId(req.params.proj_id, (result) => {
        res.json(result);
    });
});

router.get('/create_claim', (req, res) => {
    // res.sendFile(path.resolve(__dirname, './../src/index.html'));
    claimsHandler.create_claim();
});

router.get('/save_claim', () => {

});

export default router;