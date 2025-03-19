import Product from "../models/product.js"
import ErrorHandler from "../utils/errorHandler.js";

import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import APIFilters from "../utils/apiFilters.js"


// Get - api/v1/products

export const getProducts = catchAsyncErrors(async(req, res) => {

    // const products = await Product.find({});


    const apiFilters = new APIFilters(Product, req.query).search().filters();

    let products = await apiFilters.query;

    let filteredProductsCount = products.length;
    
    res.status(200).json({
        filteredProductsCount,
        products
    })
})

// Post - api/v1/admin/products
export const newProduct = async(req, res) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        product
    })

}

// Get single products details => /api/v1/products/:id

export const getProductDetails = catchAsyncErrors(async(req, res, next) => {

    const products = await Product.findById(req.params.id);

    if(!products){
       return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        products
    })


})


// Update product details => /api/v1/products/:id

export const updateProduct = catchAsyncErrors(async(req, res) => {

    let product = await Product.findById(req.params.id);

    if(!products){
        return next(new ErrorHandler("Product not found", 404))
     }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true});

    res.status(200).json({
        product
    })


})

// Delete product details => /api/v1/products/:id

export const deleteProduct = catchAsyncErrors(async(req, res) => {

    let product = await Product.findById(req.params.id);

    if(!products){
        return next(new ErrorHandler("Product not found", 404))
    }

    product = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message:"Product Deleted"
    })


})