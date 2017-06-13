// ========================== custom modules ==========================
import { dev } from './server/config';
import router from './server/router';
import dbhelper from './server/helpers/dbhelper';

// ========================== dependecy modules ==========================
import bodyParser from 'body-parser';
import express from 'express';
const app = express();


// parsing req/res body to json
app.use(bodyParser.json());

// for parsing the url encoded data using qs library
app.use(bodyParser.urlencoded({ extended: true }));

// routing
app.use(router);

// open db connection, when successful start application
dbhelper.openConnection().then(() => {
    app.listen(8081, () => {
        console.log('server started');
    });
});

// kill process when Ctrl+C is hit
process.on('SIGINT', () => {
    dbhelper.closeConnection();
});

export default app;