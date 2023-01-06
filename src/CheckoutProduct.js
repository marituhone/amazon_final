import React from 'react';
import './checkoutproduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct() {
const[{basket},dispatch] = useStateValue();
  return (
    <div className='checkoutproduct'>
        CheckoutProduct
        
        </div>
  )
}

export default CheckoutProduct