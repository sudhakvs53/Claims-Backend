// ========================== custom modules ==========================
import { dev } from './config';
import router from './commonRouter';
import dbhelper from './helpers/dbhelper';

// ========================== dependecy modules ==========================
import bodyParser from 'body-parser';
import path from 'path';
import express from 'express';
const app = express();


// parsing req/res body to json
app.use(bodyParser.json({ limit: '50mb' }));

// for parsing the url encoded data using qs library
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// routing
app.use(router);


app.use('/assets', express.static(path.resolve('node_modules')));


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

export default app;