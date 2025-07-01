import Product from "../models/product.js"
import Order from "../models/order.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import APIFilters from "../utils/apiFilters.js"


// Get - api/v1/products

export const getProducts = catchAsyncErrors(async(req, res, next) => {

    // const products = await Product.find({});

    const resPerPage = 4;

    const apiFilters = new APIFilters(Product, req.query).search().filters();

    // return next(new ErrorHandler("Hello", 400));

    let products = await apiFilters.query;

    let filteredProductsCount = products.length;

    apiFilters.pagination(resPerPage);
    
    products = await apiFilters.query.clone();
    
    res.status(200).json({
        resPerPage,
        filteredProductsCount,
        products
    })
})

// Post - api/v1/admin/products
export const newProduct = async(req, res) => {

    req.body.user = req.user._id;

    const product = await Product.create(req.body);

    res.status(201).json({
        product
    })

}

// Get single products details => /api/v1/products/:id

export const getProductDetails = catchAsyncErrors(async(req, res, next) => {

    const products = await Product.findById(req.params.id).populate("reviews.user");

    if(!products){
       return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        products
    })


})


// Get All products => /api/v1/admin/products

export const getAdminProducts = catchAsyncErrors(async(req, res, next) => {

    const products = await Product.find();

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

});

// Create a product review => /api/v1/reviews

export const createProductReview = catchAsyncErrors(async(req, res, next) => {

    const {rating, comment, productId} = req.body;

    const review = {
        user:req?.user?._id,
        rating:Number(rating),
        comment
    }

    const product = await Product.findById(productId);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    const isReviwed = product?.reviews.find(
        (r) => r.user.toString() === req.user?._id.toString()
    );

    if(isReviwed){

        product.reviews.forEach((review) => {
            if(review?.user?.toString() === req?.user?._id.toString()){
                review.comment = comment;
                review.rating = rating;
            }
        })

    }else{

        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;

    }

    product.ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

    await product.save();

    res.status(200).json({
        success:true
    })


})


// get a product review => /api/v1/reviews

export const getProductReview = catchAsyncErrors(async(req, res, next) => {

    const product = await Product.findById(req.query.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        reviews:product.reviews
    })


})



// Update product details => /api/v1/products/:id

export const canUserReview = catchAsyncErrors(async(req, res) => {

    const orders = await Order.find({
        user:req.user._id,
        "orderItems.product":req.query.productId
    });

    console.log(orders);

    if(orders.length === 0){
        return res.status(200).json({canReview:false})
    }

    res.status(200).json({
        canReview:true
    })


})
