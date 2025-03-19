import express from "express";
import dotenv from "dotenv";

import { connectDatabase } from "./config/dbConnect.js";

import errorMiddleware from "./middlewares/errors.js";

import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";

const app = express();

dotenv.config({ path: "backend/config/config.env" });


// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error : ${err}`);
    console.log("Shutting down server due to Uncaught Exception");
    process.exit(1);
})

connectDatabase();



app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello",
    });
});

app.use("/api/v1", productRoutes);
app.use("/api/v1", authRoutes);

// Using error middleware
app.use(errorMiddleware);

// Start server and store it in `server`
const server = app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT} in a ${process.env.NODE_ENV} mode`);
});

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down server due to Unhandled Promise Rejection");

    server.close(() => {
        process.exit(1);
    });
});
