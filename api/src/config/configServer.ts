import "dotenv/config"

const configServer = {
    server: {
        port: process.env.PORT || 8080,
    },
    database: {
        username: process.env.MONGO_USER as string,
        password: process.env.MONGO_PASSWORD as string,
        uri: process.env.MONGO_URI as string,
    }
};

export default configServer;