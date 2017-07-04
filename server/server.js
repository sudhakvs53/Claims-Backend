// ========================== custom modules ==========================
import { dev } from './config';
import routes from './routes';
import dbhelper from './helpers/dbhelper';

// ========================== dependecy modules ==========================
import bodyParser from 'body-parser';
import express from 'express';
const app = express();


// parsing req/res body to json
app.use(bodyParser.json({ limit: '50mb' }));

// for parsing the url encoded data using qs library
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// pass app object to routes method for registering routes
routes(app);

// open db connection, when successful start application
dbhelper.openConnection().then(() => {
    app.listen(process.env.PORT || dev.PORT, () => {
        console.log('server started');
    });
});

// kill process when Ctrl+C is hit
process.on('SIGINT', () => {
    console.log('bye bye !');
    dbhelper.closeConnection(() => {
        process.exit();
    });
});