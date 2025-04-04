import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";

const ProductItem = ({product}) => {
  return (
    <div className='col-md-6 col-lg-3 my-3'>
        <div className='card p-3 rounded'>
            <img className='card-img-top mx-auto' src={product.images[0].url} alt="" />
            <div className='card-body ps-5 d-flex justify-content-center flex-column'>
                <h5 className='card-title'>
                    <a href="#">{product.name}</a>
                </h5>

                <div className='ratings mt-auto d-flex align-items-center'>
                    <StarRatings
                    rating={product.ratings}
                    starRatedColor="blue"
                    numberOfStars={5}
                    name='rating'
                    starDimension='20px'
                    starSpacing='2px'
                    />

                    <span id='no-of-reviews' className='pt-2 ps-2'>
                        {product.numOfReviews}
                    </span>
                </div>
                <p className='cart-text mt-2'>
                    {product.price}
                </p>
                <Link to={`/product/${product._id}`} id='view_btn' className='btn btn-block'>
                    View Details
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductItem