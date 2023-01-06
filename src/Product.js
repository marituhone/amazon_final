import React from 'react'
import './product.css'
import { useStateValue } from './StateProvider';

function Product({id,title,price,image,rateing}) {
 const[{basket},dispatch] = useStateValue();
console.log(basket)
const addToBasket =  () =>{
  // dispatch items in to dta layer

  dispatch ({
      type : 'ADD_TO_BASKET',
      item:
      {
        id:id,
        title:title,
        price:price,
        image:image,
        rateing:rateing,
      }

  })


}

  return (
    <div  className='product'>
      <div className='product__info'>
        <p>{title}</p>
       <p className='product__price' >
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className='product__rateing'>

          {Array(rateing)
          
          .fill()
          .map((_,i) =>(
            <p>🌟</p>

          ))
        }
          
        </div>
        </div>

        <img src={image} />
        <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product