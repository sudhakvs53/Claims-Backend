import dbhelper from './helpers/dbhelper';

import cluster from 'cluster';
import os from 'os';
const numCPUs = os.cpus().length;

if (cluster.isMaster) {

    console.log(`Master ${process.pid} is running with ${numCPUs} workers `);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('online', (worker) => {
        console.log(`Worker with process id ${worker.process.pid} is online `);
    });


    cluster.on('exit', (worker, code, signal) => {
        if (code != 0) {
            console.log(`Worker ${worker.process.pid} died with code ${code} and signal ${signal} `);
            // console.log(`Starting a new worker `);
            // cluster.fork();
        }
    });

} else {

    require('./server');

}