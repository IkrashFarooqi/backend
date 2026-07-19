import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config()


connectDB()


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("Error :", error);
//         throw err

//     }
// })()