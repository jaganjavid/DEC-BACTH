// ef9cee2e9801b1

import express from "express";
import {registerUser, loginUser, logout, forgotPassword} from "../controllers/authController.js";

const router = express.Router();


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

router.route("/password/forgot").post(forgotPassword);

export default router;