import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js"


const seedProducts = async () => {

    try{

        await mongoose.connect("mongodb+srv://javid:javid123@ecommerce.wutpy.mongodb.net/ecom");

        // Delete existing products
        await Product.deleteMany();

        console.log("Products are deleted");

        // Insert a New Products
        await Product.insertMany(products);
        console.log("Products are added");

        process.exit();


    }catch(error){
        console.log(error)
        process.exit(1);
    }


}


seedProducts();