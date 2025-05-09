import React, { useState } from 'react'
import CheckOutSteps from './CheckOutSteps';



const PaymentMethod = () => {

  const [method, setMethod] = useState("");   

  const submitHandler = (e) => {

    e.preventDefault();

    if(method === "COD"){
        alert("COD")
    }

    if(method === "Card"){
        alert("Card")
    }

  }
 
  return (
  
   <>
    <CheckOutSteps shipping confirmOrder payment/>
    <div className="row wrapper">
    <div className="col-10 col-lg-5">
      <form
        className="shadow rounded bg-body"
        onSubmit={submitHandler}
      >
        <h2 className="mb-4">Select Payment Method</h2>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="payment_mode"
            id="codradio"
            value="COD"
            onChange={(e) => setMethod("COD")}
          />
          <label className="form-check-label" for="codradio">
            Cash on Delivery
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="payment_mode"
            id="cardradio"
            value="Card"
            onChange={(e) => setMethod("Card")}
          />
          <label className="form-check-label" for="cardradio">
            Card - VISA, MasterCard
          </label>
        </div>

        <button id="shipping_btn" type="submit" className="btn py-2 w-100">
          CONTINUE
        </button>
      </form>
    </div>
  </div>
   </>
  )
}

export default PaymentMethod