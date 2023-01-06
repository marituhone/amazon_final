import { Checkbox } from '@material-ui/core';
import React from 'react'
import './subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { calculateTotalPrice } from './reducer'

function Subtotal() {
  const[{basket},dispatch] = useStateValue();

  return (
    <div className="subtotal">
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            {/* Part of the homework */}
            Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={calculateTotalPrice(basket)} 
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />

    <button>Proceed to Checkout</button>
  </div>
  )
}

export default Subtotal