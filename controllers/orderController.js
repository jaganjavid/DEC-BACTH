
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
import Order from "../models/order.js";
import Product from "../models/product.js";


// Create new order => /api/v1/order/new


export const newOrder = catchAsyncErrors(async(req, res, next) => {

    const {
        orderItems,
        shippingInfo,
        paymentMethod,
        paymentInfo,
        itemsPrice,
        taxAmount,
        shippingAmount,
        totalAmount,
        orderStatus
    } = req.body;


    const order = await Order.create({
        orderItems,
        shippingInfo,
        paymentMethod,
        paymentInfo,
        itemsPrice,
        taxAmount,
        shippingAmount,
        totalAmount,
        orderStatus,
        user:req.user._id
    });

    res.status(200).json({
        order
    })



})


// Get Order Details => api/v1/orders/:id


export const getOrderDetails = catchAsyncErrors(async(req, res, next) => {

    const order = await Order.findById(req.params.id);

    if(!order){
        return next(new ErrorHandler("Order not found with this ID", 404));
    }

    res.status(200).json({
        order
    })


})

// Get the current user order => api/v1/me/orders

export const myOrders = catchAsyncErrors(async(req, res, next) => {

    const orders = await Order.find({user:req.user._id}).populate("user", "name email");

    if(!orders){
        return next(new ErrorHandler("Order not found with this ID", 404));
    }

    res.status(200).json({
        orders
    })


})

// Get all User admin => api/v1/admin/orders

export const allOrders = catchAsyncErrors(async(req, res, next) => {

    const orders = await Order.find()

    res.status(200).json({
        orders
    })


})

// Update Orders => api/v1/admin/orders/:id

export const updateOrders = catchAsyncErrors(async(req, res, next) => {

   const order = await Order.findById(req.params.id);

   if(!order){
    return next(new ErrorHandler("Order not found with this ID", 404));
   }

   if(order?.orderStatus === "Delivered"){
    return next(new ErrorHandler("You have already delivered this order", 404));
   }

   order?.orderItems.forEach(async (item) => {

     const product = await Product.findById(item?.product?.toString());

     if(!product){
        return next(new ErrorHandler("No product found with this ID", 404));
     }

     product.stock = product.stock - item.quantity;

     await product.save();

   })

   order.orderStatus = req.body.status;
   order.deliveredAt = Date.now();

   await order.save();


   res.status(200).json({ 
    sussess:true
    }
   )

})

// Delete Orders => api/v1/admin/orders:/id

export const deleteOrder = catchAsyncErrors(async(req, res, next) => {

    const order = await Order.findById(req.params.id);
 
    if(!order){
     return next(new ErrorHandler("Order not found with this ID", 404));
    }
 
    await order.deleteOne();
 
    res.status(200).json({ 
     sussess:true
     }
    )
 
})

