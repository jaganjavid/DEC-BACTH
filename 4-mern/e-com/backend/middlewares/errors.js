import ErrorHandler from "../utils/errorHandler.js"


export default (err, req, res, next) => {


    let error = {
        statusCode:err.statusCode || 500,
        message:err.message || "Internal Server Error"
    }

    // Handle Invalid Mongoose ID Error
    if(err.name === "CastError"){
        const message = `Resource not found Invaild ${err.path}`
        error = new ErrorHandler(message, 404);
    }


    // Handle Mongoose Duplicate Key Error
    if(err.code === 11000){

        console.log(Object.keys(err.keyValue))
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        error = new ErrorHandler(message, 400);
    }


    if(process.env.NODE_ENV === "DEVELOPMENT"){
        res.status(error.statusCode).json({
            message:error.message,
            error:err
        })
    }

    if(process.env.NODE_ENV === "PRODUCTION"){
        res.status(error.statusCode).json({
            message:error.message
        })
    }
}