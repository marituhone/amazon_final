
import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router,  Switch,Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import Checkout from './Checkout';
import Login from './Login'
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useStateValue } from './StateProvider';

const promise =  loadStripe('pk_test_51MbNZBBquPorc3CLBsLQAede0L0jq8Looze5vpVbxhRMZqp3ykn52QInEpPcVljMkkBoiRnsnIj7lqC0OR7OfyRG00EIWOkSUO');
function App() {

const [{},dispatch] =  useStateValue();


useEffect(() =>
{
 auth.onAuthStateChanged((authUser) =>
 
 {
  console.log("the user is gg" ,authUser)

  if(authUser)
  {
    dispatch({
      type:"SET_USER",
      user:authUser,
    })
  }
  else{
    dispatch(
      {
        type:"SET_USER",
        user:null,
      });
  }
 });
},[]);



















  return (
    <Router> 
    <div className="app">
       
    <Switch> 

     <Route path="/login"> 
          
         <Login />
      </Route>
      
      <Route path="/checkout"> 
          <Header /> 
          <Checkout />
      </Route>
      
      <Route path="/payment">
          <Header /> 
          <Elements stripe={promise}><Payment /></Elements>
          
      </Route>



      <Route path="/">
       <Header /> 
        <Home />
      </Route>
    </Switch> 

    </div>
    </Router>
  );
}

export default App;
