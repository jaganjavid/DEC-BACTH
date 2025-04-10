import React, { useState } from 'react'
import {useNavigate, useSearchParams} from "react-router-dom";
import { getPriceQueryParams } from '../../helpers/helpers';

const Filters = () => {


  const [min, setMin] = useState(0); 
  const [max, setMax] = useState(0);


  const navigate = useNavigate();

  let [serachParams] = useSearchParams();

  const handleButtonClick = (e) => {
    e.preventDefault();

    serachParams = getPriceQueryParams(serachParams, "min", min);
    serachParams = getPriceQueryParams(serachParams, "max", max);

    console.log(serachParams);

    const path = window.location.pathname + "?" + serachParams.toString();
    navigate(path);


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

      <div className='form-check'>
        <input type="checkbox" className='form-check-input'
        name='category'
        id="check4"
        value="Category 1"/>

        <label className='form-check-label' htmlFor="check4">Category 1</label>
      </div>
    </div>
  )
}

export default Filters