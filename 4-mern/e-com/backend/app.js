
// const express = require('express');

import express from "express";
import dotenv from "dotenv";

import productRoutes from "./routes/products.js"

const app  = express();

dotenv.config( { path:"backend/config/config.env" } );


app.get("/", (req, res) => {
    res.json({
        message:"Hello"
    })
})

app.use("/api/v1", productRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT} in a ${process.env.NODE_ENV} mode`)
})