export default (app) => {


    // if (process.env.NODE_ENV === 'dev') {
    app.use((err, req, res, next) => {
        console.log(`at next middleware ${err}`);
        // res.status(err.status || 500).json(err);
    });
    // } else {
    //     app.use((err, req, res) => {
    //         res.status(500).send(err.message);
    //     });
    // }

};