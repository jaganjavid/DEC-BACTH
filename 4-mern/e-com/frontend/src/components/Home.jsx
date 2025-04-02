import sampleImg from "../assets/default_product.png"
import {useGetProductsQuery} from "../redux/api/productsApi";

const Home = () => {


  const {data, error, isLoading, isError} = useGetProductsQuery();
  
  console.log(data);

  return (
    <div className="row mt-4">
        <h1>Lastest Product</h1>

        <section id='products'>
           <div className="row">
             <div className='col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src={sampleImg} alt="" />
                    <div className='card-body ps-5 d-flex justify-content-center flex-column'>
                        <h5 className='card-title'>
                            <a href="#">Test Product</a>
                        </h5>

                        <div className='ratings mt-auto d-flex gap-3 align-items-center'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                            <span id='no-of-reviews' className='pt-2 ps-2'>
                                3.5
                            </span>
                        </div>
                        <p className='cart-text mt-2'>
                            $2000
                        </p>
                        <a href="#" id='view_btn' className='btn btn-block'>
                            View Details
                        </a>
                    </div>
                </div>
             </div>
           </div>
        </section>
    </div>
  )
}

export default Home