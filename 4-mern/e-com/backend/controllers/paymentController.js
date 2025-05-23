
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Stripe from "stripe";
import Order from "../models/order.js"

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
        success_url:`${process.env.FRONTEND_URL}/me/orders?order_success=true`,
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

    console.log(session);

    // console.log("-------");
    // console.log(session);
    // console.log("-------");

    res.status(200).json({
        url:session.url
    })


});


// const getOrderItems = async(line_items) => {

//   return new Promise((resolve, reject) => {

//     let cartItems = [];

//     line_items?.data?.forEach(async(item) => {

//       const product = await stripe.products.retrieve(item.price.product);

//       const productId = product.metadata.productId;

//       // console.log("Item", item);
//       // console.log("-------------");
//       // console.log("product", product);

//       cartItems.push({
//         product:productId,
//         name:product.name,
//         price:item.price.unit_amount_decimal / 100,
//         quantity:item.quantity,
//         image:product.image[0]
//       })

//       // console.log("cart", cartItems);

//       if(cartItems.length === line_items.data.length){
//         resolve(cartItems);
//       }

//     })
//   })
// }

const getOrderItems = async (line_items) => {
  const cartItems = await Promise.all(
    line_items?.data?.map(async (item) => {
      const product = await stripe.products.retrieve(item.price.product);
      const productId = product.metadata.productId;

      return {
        product: productId,
        name: product.name,
        price: item.price.unit_amount_decimal / 100,
        quantity: item.quantity,
        image: product.images[0]
      };
    })
  );

  return cartItems;
};


export const stripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const rawBody = req.rawBody;

    // console.log("rawBody"-rawBody);

    console.log(process.env.STRIPE_WEBHOOK_SECRET);
  
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
  
      console.log("Event type", event.type);
  
      switch (event.type) {
        case 'checkout.session.completed':
          const session = event.data.object;

          const line_items = await stripe.checkout.sessions.listLineItems(session.id);

          const orderItems = await getOrderItems(line_items);

          const user = session.client_reference_id;

          const totalAmount = session.amount_total / 100;
          const taxAmount = session.total_details.amount_tax / 100;
          const shippingAmount = session.total_details.amount_shipping / 100;
          const itemsPrice = session.metadata.itemPrice;


          const shippingInfo = {
            address:session.metadata.address,
            city:session.metadata.city,
            phoneNo:session.metadata.address,
            zipcode:session.metadata.zipcode,
            country:session.metadata.country
          }

          const paymentInfo = {
            id:session.payment_intent,
            status: session.payment_status
          }

          const orderData = {
            shippingInfo,
            orderItems,
            itemsPrice,
            taxAmount,
            shippingAmount,
            totalAmount,
            paymentInfo,
            paymentMethod:"CARD",
            user
          }

          await Order.create(orderData);

          // console.log('Checkout Session Completed:', session);
          break;
        default:
          console.log(`Unhandled event type ${event.type}`);
      }
  
      res.status(200).json({ received: true });
  
    } catch (err) {
      console.error('Webhook error:', err.message);
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
  };
  
