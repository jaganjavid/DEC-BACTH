import React, { useEffect } from 'react'
import {Link } from "react-router-dom";
import toast from 'react-hot-toast';
import Loader from "../layout/Loader";
import { MDBDataTable } from "mdbreact";
import { useGetAdminProductsQuery } from '../../redux/api/productsApi';
import AdminLayout from '../layout/AdminLayout'



const ListProducts = () => {


  const { data, isLoading, error } = useGetAdminProductsQuery();


  useEffect(() => {
    if(error){
        toast.error(error?.data?.message);
    }
  },[error]);
  



  const setProducts = () => {

    const products = {
      columns: [
        {label:"ID", field:"id", sort:"asc"},
        {label:"Name", field:"name", sort:"asc"},
        {label:"Stock", field:"stock", sort:"asc"},
        {label:"Actions", field:"actions", sort:"asc"},
      ],
      rows:[]
    }

    data?.products?.forEach((product) => {

    products.rows.push({
        id:product?._id,
        name:product?.name,
        stock:product.stock,
        actions: (
          <>
           <Link to={`/orders`} className='btn btn-outline-primary btn-sm me-2'>Edit</Link>
           <Link to={`/`} className='btn btn-outline-success btn-sm me-2'>Add img</Link>
           <Link to={`/`} className='btn btn-outline-danger btn-sm'>Delete</Link>
          </>
        )
      })

    })


    return products;

  }


  if(isLoading){
    return <Loader/>;
  }


  
    
  return (
    <AdminLayout>
        <div className='my-5'>
            <h1> {data?.products?.length} Products</h1>

            <MDBDataTable data={setProducts()}/>
        </div>
    </AdminLayout>
  )
}

export default ListProducts