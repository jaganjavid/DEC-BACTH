
export const getPriceQueryParams = (searchParams, key, value) => {

   const hasValueInParam = searchParams.has(key);

   if(value && hasValueInParam){
     searchParams.set(key, value)
   } else if(value){
     searchParams.append(key, value)
   }else if(hasValueInParam){
     searchParams.delete(key);
   }
   
   return searchParams;
    
}


export const calculateOrderCost = (cartItems) => {

  const itemsprice = cartItems?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingPrice = itemsprice > 200 ? 0 : 25;

  const taxPrice = (0.15 * +itemsprice).toFixed(2);

  const totalPrice  = (itemsprice + shippingPrice + +taxPrice).toFixed(2);


  return{
    itemsprice,
    shippingPrice,
    taxPrice,
    totalPrice
  }


}