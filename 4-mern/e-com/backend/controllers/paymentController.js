
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECERT_KEY);

// Create a stripe chek sessiom => api/v1/payment/checkout_session

export const stripeCheckoutSession = catchAsyncErrors(async(req, res, next) => {

    const body = req?.body;

    const line_items = body?.orderItems?.map((item) => {
        return {
            price_data:{
                currency:"aud",
                product_data:{
                    name:item?.name,
                    images:[item?.image],
                    metadata: {productId: item?.product},
                },
                unit_amount: item?.price * 100
            },
            tax_rates:["txr_1ROh5nICvzzMHkmaHmXWtE8e"],
            quantity:item?.quantity
        }
    });

    const shipping_info = body?.shippingInfo;

    const shipping_rate = body?.itemsPrice >= 200 ? "shr_1ROh2bICvzzMHkmakLEpwg3v" : "shr_1ROh2CICvzzMHkmaw4Vg6xnh"


    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        success_url:`${process.env.FRONTEND_URL}/me/orders`,
        cancel_url:`${process.env.FRONTEND_URL}`,
        customer_email:req?.user?.email,
        client_reference_id:req?.user?._id?.toString(),
        mode:"payment",
        metadata:{...shipping_info, itemPrice:body?.itemsPrice},
        shipping_options:[
            {
                shipping_rate
            }
        ],
        line_items
    });

    console.log("-------");
    console.log(session);
    console.log("-------");

    res.status(200).json({
        url:session.url
    })


})