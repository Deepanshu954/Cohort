require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const userRouter = require("./route/user");
const courseRouter = require("./route/course");
const adminRouter = require("./route/admin");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        app.listen(3000, () => {
            console.log("Listening on port 3000");
        });
    } catch (err) {
        console.error("Failed to connect to MongoDB", err.message);
        process.exit(1);
    }
}

main();