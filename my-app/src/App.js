import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import FAQs from './FAQs';
import Settings from './Settings';
import Login from './Login';
import CreateAccount from './CreateAccount';
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/faqs">
          <FAQs />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/createaccount">
          <CreateAccount />
        </Route>

        <Route path="/">
          <header className="App-header">
          <img src="https://uploads-ssl.webflow.com/5c98fd7e7e3bc9bee0816b45/5ca67dd40adf050aede96294_Asset%201.svg"/>  
          </header>
          <br></br><h3> Welcome to Rise!</h3>
          <div class="container"><p> Rise is grounded in the belief that the voices of ordinary citizens matter, 
            regardless of their background or age. This social movement blueprint revolutionizes 
            how laws are created by organizing and empowering citizens to pen their own rights 
            into existence. By identifying key battleground states, catalyst points for the movement, 
            Rise creates a ripple of inspiration in other states across the nation demanding these 
            rights are codified. The process—training organizers, telling compelling narratives in 
            the media,creating visual cultural moments of protest, pushing legislators and building 
            support between unexpected allies—has helped pass 21 bills to date.</p></div><br></br><br></br>
          <button class="btn"><Link to="/login">Login</Link></button> <br></br> <br></br>
          <button class="btn"><Link to="/createaccount">Create an Account</Link></button> <br></br>
        </Route>

      </Switch>

      <p></p>
      
    </div>
  );
}

export default App;
