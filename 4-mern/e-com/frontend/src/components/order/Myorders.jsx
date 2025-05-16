import React, { useEffect } from 'react'
import { useMyOrderQuery } from '../../redux/api/orderApi'
// import { MDBDatatable } from "mdbreact";
import {Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Loader from "../layout/Loader";

const Myorders = () => {


  const {data, isLoading, error} = useMyOrderQuery();

  console.log(data);


  useEffect(() => {
    if(error){
        toast.error(error?.data?.message);
    }
  },[error]);
  

  if(isLoading){
    return Loader;
  }
    
  return (
    <div className='my-5'>
        <h1> {data?.orders?.length} orders</h1>
    </div>
  )
}

export default Myorders