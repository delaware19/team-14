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
          <header className="App-header"></header>
          <p> Welcome to Rise! <br></br> <br></br>
          <button class="btn"><Link to="/login">Login</Link></button> <br></br> <br></br>
          <button class="btn"><Link to="/createaccount">Create an Account</Link></button> <br></br></p>
        </Route>

      </Switch>

      <p></p>
      
    </div>
  );
}

export default App;
