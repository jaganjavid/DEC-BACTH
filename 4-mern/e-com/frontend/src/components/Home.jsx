
import { useEffect } from "react";
import {useGetProductsQuery} from "../redux/api/productsApi";
import Loader from "./layout/Loader";
import ProductItem from "./ProductItem";

import toast from "react-hot-toast";
import CustomPagination from "./layout/CustomPagination";
import {useSearchParams} from "react-router-dom";
import Filters from "./layout/Filters";

const Home = () => {

  let [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const keyword = searchParams.get("keyword") || "";
  const min = searchParams.get("min");
  const max = searchParams.get("max");



  const params = { page, keyword };

  min !== null && (params.min = min);
  max !== null && (params.max = max);

  console.log(params);

  const {data, error, isLoading, isError} = useGetProductsQuery(params);




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

       {
        keyword && (
          <div className="col-6 col-md-3 mt-5">
            <Filters/>
          </div>
        )
       }
      
        <div className={keyword ? "col-6 col-md-9" : "col-6 col-md-12"}>
          <h1 id="products_heading" className="text-secondary">
            {keyword ? `${data.products.length} product found with the ${keyword}` : "Lastest Products"}
          </h1>

          <section id='products'>
           <div className="row">
             {data?.products.map((product) => (
               <ProductItem key={product._id} product={product} keyword={keyword}/>
            ))}
           </div>
        </section>
        </div>

       

            <CustomPagination
              resPerpage={data?.resPerPage}
              filteredProductsCount={data?.filteredProductsCount}
            />
    </div>
  )
}

export default Home