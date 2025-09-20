import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.CLOUD_MONGO_URI), 
        console.log("DATABASE connected");
    } catch (error) {
        console.error("DATABASE connection failed:", error);
        process.exit(1);
    }
}

export default connectDatabase;
