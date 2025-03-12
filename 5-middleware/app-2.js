// Router Level Middlerware

// application-level middleware

import express from "express";

const app = express();
const router = express.Router();

// Authentication middleware

const authMiddlerware = (req, res, next) => {

    const auth = req.headers.authorization;

    if(auth === "secret-token"){
        next();
    }else{
        res.status(401).send("Unauthorized Access");
    }
    

}

// Apply middle ware
router.get("/dashboard", authMiddlerware, (req, res) => {
    res.send("Welcome to dashboard");
})

app.use("/api", router);


app.listen(3000, () => console.log(`Server is running on port 3000`))