// ========================== custom modules ==========================
import { dev } from './config';
import routes from './routes';
import dbhelper from './helpers/dbhelper';

// ========================== dependecy modules ==========================
import cluster from 'cluster';
// const numCPUs = require('os').cpus().length;

import bodyParser from 'body-parser';
import express from 'express';
const app = express();


// parsing req/res body to json
app.use(bodyParser.json({ limit: '50mb' }));

// for parsing the url encoded data using qs library
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// pass app object to routes method for registering routes
routes(app);

// if (cluster.isMaster) {

//     console.log(`Master ${process.pid} is running, number of workers ${numCPUs}`);

//     for (let i = 0; i < numWorkers; i++) {
//         cluster.fork();
//     }

//     cluster.on('online', (worker) => {
//         console.log(`Worker ${worker.process.pid} is online`);
//     });

//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died with code ${code} and signal ${signal} `);
//         console.log('Staring a new worker');
//         cluster.fork();
//     });
// } else {
// open db connection, when successful start application
dbhelper.openConnection().then(() => {
    app.listen(dev.PORT, () => {
        console.log(`server started ${dev.PORT} `);
        console.log(`Worker ${process.pid} started `);
    });
});

// kill process when Ctrl+C is hit
process.on('SIGINT', () => {
    console.log('bye bye !');
    dbhelper.closeConnection(() => {
        process.exit();
    });
});

process.on("SIGUSR2", () => {
    console.log(`SIGUSR2 received, reloading workers`);

    delete require.cache[require.resolve("./server")];

    let i = 0;
    const workers = Object.keys(cluster.workers);

    const restart = () => {
        if (i == workers.length) return;
        console.log(`Killing ${workers[i]}`);

        dbhelper.closeConnection(() => {
            cluster.workers[workers[i]].disconnect();
            cluster.workers[workers[i]].on("disconnect", () => {
                console.log(`Shutdown complete`);
            });
            const newWorker = cluster.fork();
            newWorker.on("listening", () => {
                console.log(`Replacement worker online `);
                i++;
                restart();
            });
        });
    };
    restart();
});


// }