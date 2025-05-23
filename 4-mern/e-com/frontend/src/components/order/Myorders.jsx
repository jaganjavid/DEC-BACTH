import React, { useEffect } from 'react'
import { useMyOrderQuery } from '../../redux/api/orderApi'
// import { MDBDatatable } from "mdbreact";
import {Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Loader from "../layout/Loader";
import { MDBDataTable } from "mdbreact";
import { clearCartItem } from '../../redux/features/cartSlice';


const Myorders = () => {


  const {data, isLoading, error} = useMyOrderQuery();

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderSuccess = searchParams.get("order_success");

  useEffect(() => {
    if(error){
        toast.error(error?.data?.message);
    }

    if(orderSuccess){
      dispatch(clearCartItem());
      navigate("/me/orders");
    }
  },[error, orderSuccess]);
  

 


  const setOrders = () => {

    const orders = {
      columns: [
        {label:"ID", field:"id", sort:"asc"},
        {label:"Amount Paid", field:"amount", sort:"asc"},
        {label:"Payment Status", field:"status", sort:"asc"},
        {label:"Order Status", field:"orderStatus", sort:"asc"},
        {label:"Actions", field:"actions", sort:"asc"},
      ],
      rows:[]
    }

    data?.orders?.forEach((order) => {

      orders.rows.push({
        id:order._id,
        amount:order?.totalAmount,
        status:order?.paymentInfo?.status,
        orderStatus:order?.orderStatus,
        actions: (
          <>
           <Link to={`/orders/${order?._id}`} className='btn btn-primary btn-sm'>View</Link>
           <Link to={`/invoice/orders/${order?._id}`} className='btn btn-success btn-sm'>Invoice</Link>
          </>
        )
      })

    })


    return orders;

  }


  if(isLoading){
    return <Loader/>;
  }

  console.log(data);

  
    
  return (
    <div className='my-5'>
        <h1> {data?.orders?.length} orders</h1>

        <MDBDataTable data={setOrders()}/>
    </div>
  )
}

export default Myorders