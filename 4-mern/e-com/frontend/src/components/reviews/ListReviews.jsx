import React from 'react'
import avatar from "../../assets/default_avatar.jpg"
import StarRatings from 'react-star-ratings'

const ListReviews = ({ reviews }) => {
    return (
        <div className='reviews w-75'>
            <h3>Other's Reviews</h3>
            <hr />

            {reviews.map((review) => (
                <div className='review-card my-3'>
                    <div className='row'>
                        <div className='col-1'>
                            <img src={review?.user?.avatar?.url} alt="" width="50px" height="50px" className='rounded-circle' />
                        </div>
                        <div className='col-11'>
                            <StarRatings
                                rating={review.rating}
                                starRatedColor="blue"
                                numberOfStars={5}
                                name='rating'
                                starDimension='20px'
                                starSpacing='2px'
                            />
                            <p className='review_user'>{review.name}</p>
                            <p className='review_comment'>{review.comment}</p>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default ListReviews