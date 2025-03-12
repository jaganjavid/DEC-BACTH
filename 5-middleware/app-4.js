// Third party middleware

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("CORS enabled");
});

app.listen(3000, () => console.log(`Server is running on port 3000`));
