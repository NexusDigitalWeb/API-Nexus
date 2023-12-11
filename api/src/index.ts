import app from "./app";
import configServer from "./config/configServer";
import connectMongo from "./config/dbConfig";

const main = async () => {
    const PORT = configServer.server.port;
    try {
        await connectMongo()
        app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));
    } catch (error) {
        console.error("Unable to connect to the database");
    }
};

main();