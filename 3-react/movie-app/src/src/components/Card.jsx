import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({movie}) => {
  
  const { id, original_title,overview,poster_path } = movie;

  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`

  return (
    <Link to={`/movie/${id}`}>
        <div className="bg-white border border-gray-200 rounded-lg shadow mb-5 p-5">
            <img src={image} alt={original_title}/>
            <div className='mt-3'>
                <h5 className="mb-2 text-2xl font-bold text-gray-900">{original_title}</h5>
                <p className="mb-3 font-normal text-gray-700 line-clamp-3">{overview}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card