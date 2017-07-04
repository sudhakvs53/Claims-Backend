import favoritesHandler from './favoriteHandler';

export default (router) => {
    router.post('/create_userFavorite', (req, res) => {
        console.log(1);
        favoritesHandler.create_userFavorite(req.body, (isSuccess) => {
            console.log(isSuccess);
            if (isSuccess)
                res.sendStatus(200);
        });
    });

    router.get('/get_userFavorites', (req, res) => {
        favoritesHandler.get_userFavorites({ user_id: req.get('user_id') }, (resData) => {
            res.json(resData);
        });
    });

    router.post('/insert_userFavorite', (req, res) => {
        favoritesHandler.insert_userFavorite(req.body, (isSuccess) => {
            if (isSuccess)
                res.sendStatus(200);
        });
    });

    router.post('/remove_userFavorite', (req, res) => {
        favoritesHandler.remove_userFavorite(req.body, (isSuccess) => {
            if (isSuccess)
                res.sendStatus(200);
        });
    });

};