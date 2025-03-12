// Built-In Middlerware

import express from "express";

const app = express();

app.use(express.json());

// urlencoded;

app.post("/data", (req, res) => {
    console.log(req.body);
    res.json(req.body);
})


app.listen(3000, () => console.log(`Server is running on port 3000`))