import express from 'express';
const router = express.Router();

// import all custom router objects
const routes = [
    require('./modules/projects/projectRouter'),
    require('./modules/claims/claimsRouter'),
    require('./modules/comments/commentsRouter'),
    require('./modules/favorites/favoritesRouter'),
    require('./modules/history/historyRouter'),
    require('./modules/login/loginRouter'),
    require('./modules/loginFather/loginFatherRouter')
];

export default (app) => {

    // passing router object to all custom router object methods
    routes.forEach((routeObj) => {
        routeObj.default(router);
    });

    // register routes to app
    app.use(router);

};