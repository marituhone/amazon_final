import React from 'react'
import './header.css';
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
function Header() {
  const[{basket},dispatch] = useStateValue(); 
  // pulling item from the basket

  return (
         <div className='header'>
          <Link  to ="/">
          <img className='header-logo' src=' https://pngimg.com/uploads/amazon/amazon_PNG11.png
        ' /> 
          </Link>
            <div className='header__search'>

            <input  className='header__searchInput' type="text" />
              <SearchIcon className='header__searchIcon' />

            </div>
          <div className='header__nav'>
           <Link to ='/login'>
             <div className='header__option'>
                <span className='header__optionLineOne'> hello guest</span>
                <span className='header__optionLineTwo'> Sign In</span>
              </div>

            </Link>

              <div className='header__option'>
                <span className='header__optionLineOne'> request</span>
                <span className='header__optionLineTwo'> orders</span>
              </div>

              <div className='header__option'>
                <span className='header__optionLineOne'> your </span>
                <span className='header__optionLineTwo'> prime</span>
              </div>
              <Link to="/checkout">
              <div className='header__optionBasket'>
              <ShoppingBasketIcon className='header__shoppingCart' />
              <span className='header__optionLineTwo   header__basketCount'>{basket?.length}</span>
              </div>
            </Link>
            </div>
        </div>
  );
}

export default Header