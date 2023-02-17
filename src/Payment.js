import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

import { Link } from "react-router-dom";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {CardElement , useStripe, useElements } from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format";

import { calculateTotalPrice } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const { history } = useHistory();
  // const navigate = useNavigate();
  const stripe = useStripe();
  const  elements = useElements();
  const [error,setError] = useState(null);
  const [disabled,setDisabeled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded,setsucceeded] = useState(false);
  const [clientSecret,setClientSecret] = useState(true)

  useEffect(() => {
  
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${calculateTotalPrice(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  // console.log("the seccrete key is >>>>>>>>>", clientSecret);

const handleSubmit = async (event) => {
  event.preventDefault();
  setProcessing(true); 
  const payload = await stripe
    .confirmCardPayment(clientSecret, {
       payment_method: {
        card: elements.getElement(CardElement),
      },
    })
    .then(({ paymentIntent }) => {
      
      setsucceeded(true);
      setError(null);
      setProcessing(false);
      // history.replace("/orders");

      history.push('/login')
    });
};

const handleChange = event => {
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
            <p>user 1, 1</p> 
            <p>addis addis</p>     
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
                rateing={item.rateing}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">

            <form onSubmit={handleSubmit}>
              
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
                    /> 
                    {/* <button  disabled={processing || disabled || succeeded}> <span >{processing ?<p>processing</p>:"buy now"}</span></button> */}


                    <button
                  className="payment__button"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
                    </div>
                    {error && <div>{error}</div>}
                    
                    </form> 

          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;