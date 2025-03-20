import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";


// check if user is authenticated or not

export const isAuthenticatedUser = catchAsyncErrors(async(req, res, next) => {

    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Login first to access the resources",401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    req.user = await User.findById(decoded.id)

    next();


})