import React from 'react'
import './header.css';
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
  const[{basket,user},dispatch] = useStateValue(); 
 
  // pulling item from the basket
  const handelAuthentication = () =>
  {
    if(user)
    {
      auth.signOut();
    }
  }

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
           <Link to ={!user && '/login'}>
             <div onClick={handelAuthentication} className='header__option'>
                <span className='header__optionLineOne'> hello {user.email}</span>
                <span className='header__optionLineTwo'> {user ? "sign out" :"sign in"}</span>
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