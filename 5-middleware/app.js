// application-level middleware

import express from "express";

const app = express();


// Middleware funtion to log request

const logger = (req, res, next) => {

    console.log(`${req.method}`);
    next(); // pass control to the next

} 

app.use(logger);

// Apply middleware globally

app.get("/", (req, res) => {
    console.log("Home")
    res.send("Home Page")
})

app.get("/about", (req, res) => {
    console.log("About")
    res.send("About Page")
})


app.listen(3000, () => console.log(`Server is running on port 3000`))