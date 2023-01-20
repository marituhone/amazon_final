import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';

function Payment() {

    const[{basket,user},dispatch] = useStateValue(); 
  return (
    <div className='payment'>
         <div className="payment__container">
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery information</h3>

                </div>
                <div className="payment__address">
                    <p>{user?.email}em</p>
                    <p>react 123</p>
                    <p>Losangels </p>
                </div>

            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>reveiew items and delivery</h3>
                </div>
                <div className="payment__items">
                    
                    {basket.map(item =>
                        {
                            <CheckoutProduct
                            id = {item.id}
                            title ={item.title}
                            image = {item.image}
                            price = {item.price}
                            rateing = {item.rateing}
                             />
                        })}
                </div>
                
            </div>

            <div className="payment__section">
                
            </div>

         </div>
    </div>
  )
}

export default Payment