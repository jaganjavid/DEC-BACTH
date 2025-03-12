// Custom error handler


import express from "express";

const app = express();

app.get("/", (req, res) => {
    // res.send("Hello im not error");
    throw new Error("Something went worng");
});

// Error-handling

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("Internal server error");
})

app.listen(3000, () => console.log(`Server is running on port 3000`));
