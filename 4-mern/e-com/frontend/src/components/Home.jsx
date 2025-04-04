
import { useEffect } from "react";
import {useGetProductsQuery} from "../redux/api/productsApi";
import Loader from "./layout/Loader";
import ProductItem from "./ProductItem";

import toast from "react-hot-toast";


const Home = () => {


  const {data, error, isLoading, isError} = useGetProductsQuery();


  useEffect(() => {
    if(isError){
        toast.error(error.data.message);
    }
  }, [isError]);
  
  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="row mt-4">
        <h1>Lastest Product</h1>

        <section id='products'>
           <div className="row">
             {data?.products.map((product) => (
               <ProductItem key={product._id} product={product}/>
            ))}
           </div>
        </section>
    </div>
  )
}

export default Home