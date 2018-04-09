import historyHandler from './historyHandler';

export default (router) => {

    router.get('/get_project_history', async(req, res, next) => {
        try {
            const resHistData = await historyHandler.get_project_history(req.body);
            res.status(200).json({ resHistData  });
            console.log("resHistData: "+resHistData);
        } catch (error) {
            next(error.message);
        }
    });
    
    // router.get('/get_claim_history', async(req, res, next) => {
    //     try {
    //         const resHistData = await historyHandler.get_claim_history(req.body);
    //         res.status(200).json({ resHistData  });
    //         console.log("resHistData: "+resHistData);
    //     } catch (error) {
    //         next(error.message);
    //     }
    // });

    router.get('/get_claim_history', async(req, res, next) => {
        try {
            const resHistData = await historyHandler.get_claim_history(req.get("claim_id"));
            res.status(200).send(resHistData);
        } catch (error) {
            next(error.message);
        }
    });


    router.post('/insert_history', async(req, res, next) => {
        try {
            const resHistData = await historyHandler.insert_history(req.body);
            res.status(200).json({ resHistData });
        } catch (error) {
            next(error.message);
        }
    });

};