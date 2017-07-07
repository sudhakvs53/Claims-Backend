export const dev = {
    PORT: 3000,
    dbUrl: {
        // mLabDBurl: 'mongodb://dev:dev@ds143201.mlab.com:43201/claimsdb',
        localDBUrl: 'mongodb://localhost:27017/claimsDB',
        mongoAtlasURL: 'mongodb://admin:root@cluster0-shard-00-00-gxp47.mongodb.net:27017,cluster0-shard-00-01-gxp47.mongodb.net:27017,cluster0-shard-00-02-gxp47.mongodb.net:27017/claims?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
    }
};

export const qa = {};

export const prod = {};