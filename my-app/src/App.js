import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import FAQs from './FAQs';
import Settings from './Settings';
import Login from './Login';
import Games from './Games';
import CreateAccount from './CreateAccount';
import Level1 from './Level1';
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
        <Route path="/games">
          <Games />
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
        <Route path="/level1">
          <Level1 />
        </Route>

        <Route path="/">
          <header className="App-header">
          <img src="https://uploads-ssl.webflow.com/5c98fd7e7e3bc9bee0816b45/5ca67dd40adf050aede96294_Asset%201.svg"/>  
          </header>
          <br></br><h2> WELCOME TO RISE</h2>
          <div class="container"><p> Rise is grounded in the belief that the voices of ordinary citizens matter. 
            This social movement blueprint revolutionizes how laws are created by organizing and empowering 
            citizens to pen their own rights into existence and creates a ripple of inspiration in states 
            across the nation. Rise has helped pass 27 bills to date. Will you be a part of the movement too?</p></div><br></br><br></br>
          <button class="btn"><Link to="/login">Login</Link></button> <br></br> <br></br>
          <button class="btn"><Link to="/createaccount">Create an Account</Link></button> <br></br>

          <div class="container"><p> For more information on who we are, go to <a href="https://risenow.us" target="_blank">Rise Now</a>.</p></div>

        </Route>

      </Switch>

      <p></p>
      
    </div>
  );
}

export default App;
