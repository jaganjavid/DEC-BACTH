import express from "express";
import {registerUser, loginUser, logout} from "../controllers/authController.js";

const router = express.Router();


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

export default router;