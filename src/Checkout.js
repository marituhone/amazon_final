import React from 'react'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';


function Checkout() {
  const[{basket},dispatch] = useStateValue();

  return (
    <div className='checkout'>
       <FlipMove>
        <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
        <h2 className="checkout__title">your shoopeing Basket </h2>

      {basket.map(item => (
        <CheckoutProduct
        id = {item.id}
        title ={item.title}
        image = {item.image}
        price = {item.price}
        rateing = {item.rateing}
         />))} 
    
        </div>
        </div>
        </FlipMove>

        <div className="checkout__right">
          <Subtotal />
                
        </div>
    </div>
  );
}

export default Checkout