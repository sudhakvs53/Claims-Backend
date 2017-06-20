// ========================== custom modules ==========================
import { dev } from './server/config';
import router from './server/fileRouter';
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

app.use('/assets', express.static(__dirname + '/node_modules'));
app.use('/source', express.static(__dirname + '/src'));

// open db connection, when successful start application
dbhelper.openConnection().then(() => {
    app.listen(dev.PORT, () => {
        console.log('server started');
    });
});

// kill process when Ctrl+C is hit
process.on('SIGINT', () => {
    dbhelper.closeConnection();
    console.log('bye bye !');
    process.exit();
});

export default app;