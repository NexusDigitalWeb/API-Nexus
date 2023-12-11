import mongoose from "mongoose"
import configServer from "./configServer";

const connectMongo = async () => {
    try {
        const uri = configServer.database.uri;
        await mongoose.connect(uri);
        console.log("MongoDB connected")
    } catch (error) {
        console.error(error);
    }
}

export default connectMongo;