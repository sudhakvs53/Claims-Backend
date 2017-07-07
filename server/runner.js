import dbhelper from './helpers/dbhelper';

import path from 'path';
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
            console.log(`Starting a new worker `);
            cluster.fork();
        }
    });

    process.on("SIGUSR2", () => {
        console.log(`SIGUSR2 received, reloading workers`);

        delete require.cache[path.join(__dirname, '/server.js')];

        let i = 0;
        const workers = Object.keys(cluster.workers);

        const restart = () => {
            if (i == workers.length) return;
            console.log(`Killing ${workers[i]}`);

            // dbhelper.closeConnection(() => {
            cluster.workers[workers[i]].disconnect();

            cluster.on("disconnect", () => {
                console.log(`Shutdown complete`);
                dbhelper.closeConnection();
            });

            const newWorker = cluster.fork();
            newWorker.on("listening", () => {
                console.log(`Replacement worker online `);
                i++;
                restart();
            });
            // });
        };
        restart();
    });

} else {

    require('./server');

}