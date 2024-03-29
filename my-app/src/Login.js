import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import FAQs from './FAQs';
import Settings from './Settings';
import { Switch, Route, Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
        <header className="App-header">
          <img src="https://uploads-ssl.webflow.com/5c98fd7e7e3bc9bee0816b45/5ca67dd40adf050aede96294_Asset%201.svg"/>  
          </header>
          
        <p> <h3>LOGIN</h3> </p>

        <br></br>
        <div class="apply-form-group-item half"><label for="Email" class="apply-field-label-medium"><p>Email* </p></label><input type="text" class="apply-text-field w-input" maxlength="256" name="Text" data-name="Text" id="Text" required=""/></div>
        
        <br></br>
        <div><label for="pass"><p>Password</p>
        </label><input type="password" id="pass" name="password"minlength="8" required>
        </input></div>

        <br></br>

        <button class="btn"><Link to="/home">Submit</Link></button> <br></br>
      
    </div>
  );
}

export default Login;
