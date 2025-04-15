// mongodb+srv://javid:javid123@ecommerce.wutpy.mongodb.net/

import mongoose from "mongoose";

export const connectDatabase = () => {

    // let DB_URI = "";

    // if(process.env.NODE_ENV === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URL;
    // if(process.env.NODE_ENV === "PRODUCTION") DB_URI = process.env.DB_URL;


    mongoose.connect("mongodb+srv://javid:javid123@ecommerce.wutpy.mongodb.net/ecom").then((con) => {

        console.log(`MongoDB Database connected with ${con.connection.host}`)
        
    })


}