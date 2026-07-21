import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";

dotenv.config()


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("Mongo DB connection Failed !!! ", error)
    })

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("Error :", error);
//         throw err

//     }
// })()