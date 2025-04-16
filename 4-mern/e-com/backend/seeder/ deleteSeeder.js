import mongoose from "mongoose";
import Product from "../models/product.js"

const deleteProducts = async () => {

    try{

        await mongoose.connect("mongodb+srv://javid:javid123@ecommerce.wutpy.mongodb.net/ecom");

        // Delete existing products
        await Product.deleteMany();

        process.exit();


    }catch(error){
        console.log(error.message)
        process.exit(1);
    }


}


deleteProducts();