import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js"
import User from "../models/user.js";


const seedProducts = async () => {

    try{

        await mongoose.connect("mongodb+srv://javid:javid123@ecommerce.wutpy.mongodb.net/ecom");

        // Fetch the first user (admin)

        const firstUser = await User.findOne();

        if(!firstUser){
            console.log("No User Found");
            process.exit(1);
        }


        // Delete existing products
        await Product.deleteMany();

        // Assing user ID to Products
        const updateProducts = products.map((product) => ({
            ...product,
            user:firstUser._id
        }))

        // Insert New Products 
        await Product.insertMany(updateProducts);

        process.exit();


    }catch(error){
        console.log(error)
        process.exit(1);
    }


}


seedProducts();