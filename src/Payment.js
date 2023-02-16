import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

import { Link, useHistory } from "react-router-dom";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {CardElement , useStripe, useElements } from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format";

import { calculateTotalPrice } from "./reducer";
// import axios from "./axios";
import { db } from "./firebase";


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const  elements = useElements();
  const [error,setError] = useState(null);
  const [disabled,setDisabeled] = useState(true)
  const handelSubmit = e =>{

  }

  const handleChange = event =>
  {
//  listen for  changes in card element 
// display any error if happendle filling the form
setDisabeled(event.empty);
setError(event.error ? event.error.message : "");
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="paymment__address">
            <p>{user?.email}</p>
            <p>Rua do React, 1</p>  {/* exibir user.address */}
            <p>São José, SC</p>     {/* exibir user.city */}
          </div>
        </div>

        <div className="payment__section">        
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rateing = {item.rateing}
                // rating={item.rateing}
              />
            ))}
            
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">

            <form onSubmit={handelSubmit}>
                <CardElement onChange={handleChange} />
                <CardElement onChange={handleChange} />

                <div className="payment__priceContainer">
                    <CurrencyFormat
                        renderText={(value) => (
                        <>
                            <h3>Order total: {value}</h3>
                        </>
                        )}
                        decimalScale={2}
                        value={calculateTotalPrice(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    /> </div>
                    
                    </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;