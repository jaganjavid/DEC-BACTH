import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useGetProductDetailsQuery } from "../redux/api/productsApi"
import Loader from "./layout/Loader";
import StarRatings from "react-star-ratings";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem } from "../redux/features/cartSlice";
import NewReviews from "./reviews/NewReviews";
import ListReviews from "./reviews/ListReviews";


const ProductDetails = () => {

    const params = useParams();

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const { data, error, isLoading, isError } = useGetProductDetailsQuery(params.id);


    const product = data?.products || {};
    const {isAuthenticated} = useSelector((state) => state.auth);
    const firstImage = product?.images?.[0]?.url || ``;


    useEffect(() => {
        if (isError) {
            toast.error(error.data.message);
        }
    }, [isError]);

    const increseQty = () => {
       
        const count = document.querySelector(".count");

        if(count?.valueAsNumber >= product?.stock) return;

        const qty = count.valueAsNumber + 1;

        setQuantity(qty);

    }

    const decreseQty = () => {
        const count = document.querySelector(".count");

        if(count.valueAsNumber <= 1) return;

        const qty = count.valueAsNumber - 1;

        setQuantity(qty);
    }

    const setItemCart = () => {

        const cartItem = {
            product:product?._id,
            name:product?.name,
            price:product?.price,
            image:product?.images[0]?.url,
            stock:product?.stock,
            quantity
        }

        dispatch(setCartItem(cartItem));

    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="row d-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <div className="p-3">
                    <img
                        className="d-block w-100"
                        src={firstImage}
                        alt=""
                        width="340"
                        height="390"
                        id="mainProductImage"
                    />
                </div>
                <div className="row justify-content-start mt-5">
                    {product.images?.map((img, index) => (
                        <div key={index} className="col-2 ms-4 mt-2">
                            <a role="button"
                             onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("mainProductImage").src = img.url;
                             }}>
                                <img
                                    className="d-block border rounded p-3 cursor-pointer"
                                    height="100"
                                    width="100"
                                    src={img.url}
                                    alt=""
                                />
                            </a>
                    </div>
                    ))}
                </div>
            </div>

            <div className="col-12 col-lg-5 mt-5">
                <h3>{product.name}</h3>
                <p id="product_id">{product._id}</p>

                <hr />

                <div className="d-flex">
                    <StarRatings
                        rating={product.ratings}
                        starRatedColor="blue"
                        numberOfStars={5}
                        name='rating'
                        starDimension='20px'
                        starSpacing='2px'
                    />
                    <span id="no-of-reviews" className="pt-1 ps-2"> ({product.numOfReviews} Reviews) </span>
                </div>
                <hr />

                <p id="product_price">{product.price}</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus" onClick={decreseQty}>-</span>
                    <input
                        type="number"
                        className="form-control count d-inline"
                        value={quantity}
                    />
                    <span className="btn btn-primary plus" onClick={increseQty}>+</span>
                </div>
                <button
                    type="button"
                    id="cart_btn"
                    className="btn btn-primary d-inline ms-4"
                    disabled={product.stock <= 0}
                    onClick={setItemCart}
                >
                    Add to Cart
                </button>

                <hr />

                <p>
                    Status: <span id="stock_status" className={product.stock > 0 ? "greenColor" : "redColor"}>
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                </p>

                <hr />

                <h4 className="mt-2">Description:</h4>
                <p>
                    {product.description}
                </p>
                <hr />
                <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>

               {isAuthenticated ? <NewReviews productId={product._id}/> :  <div className="alert alert-danger my-5" type="alert">
                    Login to post your review.
                </div>}
            </div>

            {product?.reviews?.length > 0 && <ListReviews reviews={product.reviews}/>}
            
        </div>
    )
}

export default ProductDetails