
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

// Helper to generate an array of dates between two dates

function getDatesBetween(startDate, endDate){
   const dates = [];

   let currentDate = new Date(startDate);

   while(currentDate <= endDate){
     const formattedDate = currentDate.toISOString().split("T")[0];
     dates.push(formattedDate);
     currentDate.setDate(currentDate.getDate() + 1);
   }

   return dates;
}

async function getSalesData(startDate, endDate) {
    
    const salesData = await Order.aggregate([
        {
            // Stage 1 - filter result
            $match:{
                createdAt:{
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                }
            }
        },
        {
           // State 2 - Group
           $group:{
             _id:{
                date:{$dateToString: { format: "%Y-%m-%d", date: "$createdAt" }}
             },
             totalSales: {$sum:"$totalAmount"},
             numOrders:{$sum:1} // count the number of orders
           }
        }
    ]);

   const salesMap = new Map();
   let totalSales = 0;
   let totalNumOrders = 0;

   for(const entry of salesData){
     const date = entry._id.date;
     const sales = entry.totalSales;
     const numOrders = entry.numOrders;

     salesMap.set(date, {sales, numOrders});
     totalSales += sales
     totalNumOrders += numOrders;
   }

   const datesBetween = getDatesBetween(startDate, endDate);

   const finalSalesData = datesBetween.map((date) => {
    const entry = salesMap.get(date) || {sales : 0, numOrders:0};

    // console.log(entry);
    return {
        date,
        sales:entry.sales,
        numOrders:entry.numOrders
    }
   });


   return{
    totalSales,
    totalNumOrders,
    salesData:finalSalesData
   }


}


// Get sales => api/v1/admin/get_sales

export const getSales = catchAsyncErrors(async(req, res, next) => {

    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate);

    startDate.setUTCHours(0,0,0,0);
    endDate.setUTCHours(23,59,59,999);

    const { salesData, totalSales, totalNumOrders } = await getSalesData(startDate, endDate);
 
    res.status(200).json({ 
        sussess:true,
        salesData,
        totalSales,
        totalNumOrders
     }
    )
 
})

