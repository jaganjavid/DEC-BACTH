import React, { useEffect, useState } from 'react'
import {useNavigate, useSearchParams} from "react-router-dom";
import { getPriceQueryParams } from '../../helpers/helpers';
import { PRODUCT_CATEGORIES } from '../../constant/constant';

import StarRatings from "react-star-ratings";

const Filters = () => {


  const [min, setMin] = useState(0); 
  const [max, setMax] = useState(0);


  const navigate = useNavigate();

  let [serachParams] = useSearchParams();

  useEffect(() => {

    serachParams.has("min") && setMin(serachParams.get("min"));
    serachParams.has("max") && setMax(serachParams.get("max"));

  }, [])


  // Handle category and ratings filter

  const handleClick = (checkbox) => {

    const checkboxes = document.getElementsByName(checkbox.name);

    checkboxes.forEach((item) => {
      if(item !== checkbox) item.checked = false
    })


    if(checkbox.checked === false){

      // delete the filter
      if(serachParams.has(checkbox.name)){
        serachParams.delete(checkbox.name);

        const path = window.location.pathname + "?" + serachParams.toString();
        navigate(path);
      }

    }else{

      // Set a new filter value if already there

      if(serachParams.has(checkbox.name)){
        serachParams.set(checkbox.name, checkbox.value)
      }else{

        // append new filter

        serachParams.append(checkbox.name, checkbox.value)
      }

      const path = window.location.pathname + "?" + serachParams.toString();
      navigate(path);


    }

  }

  const handleButtonClick = (e) => {
    e.preventDefault();

    serachParams = getPriceQueryParams(serachParams, "min", min);
    serachParams = getPriceQueryParams(serachParams, "max", max);

    const path = window.location.pathname + "?" + serachParams.toString();
    navigate(path);


  }

  const defaultCheckHandler = (checkboxType, checkboxValue) => {
    
    const value = serachParams.get(checkboxType);

    if(String(checkboxValue) === value) return true;

    return false;
    
  }

  
  

  return (
    <div className='border p-3 filter'>
      <h3>Filters</h3>
      <hr />
      <h5 className='filter-heading mb-3'>Price</h5>

      <form id='filter_form' className='px-2' onSubmit={handleButtonClick}>
        <div className='row'>
          <div className='col'>
            <input type="text" className='form-control'
            placeholder='Min ($)'
            name='min'
            value={min}
            onChange={(e) => setMin(e.target.value)}/>
          </div>
          <div className='col'>
            <input type="text" className='form-control'
            placeholder='Max ($)'
            name='max'
            value={max}
            onChange={(e) => setMax(e.target.value)}/>
          </div>
          <div className='col'>
            <button type='submit' className='btn btn-primary'>GO</button>
          </div>
        </div>
      </form>
      <hr />
      <h5 className='mb-3'>Category</h5>

      {PRODUCT_CATEGORIES?.map((category) => (
      <div className='form-check' key={category}>
          <input type="checkbox" className='form-check-input'
          name='category'
          id="check4"
          value={category} 
          defaultChecked={defaultCheckHandler("category", category)}
          onClick={(e) => handleClick(e.target)}/>

          <label className='form-check-label' htmlFor="check4">{category}</label>
      </div>
      ))}

      <hr />
      <h5 className='mb-3'>Ratings</h5>
      
      {[5,4,3,2,1].map((rating) => (
        <div className='form-check' key={rating}>
        <input type="checkbox" className='form-check-input'
        name='ratings'
        id="check7"
        value={rating} 
        defaultChecked={defaultCheckHandler("ratings", rating)}
        onClick={(e) => handleClick(e.target)}/>

        <label className='form-check-label' htmlFor="check4">
        <StarRatings
          rating={rating}
          starRatedColor="blue"
          numberOfStars={5}
          name='rating'
          starDimension='20px'
          starSpacing='2px'
        />
        </label>
    </div>
      ))}



      
    </div>
  )
}

export default Filters