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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>

        <header className="App-header">
        <nav>
        <div>
        <button type="button" class="btn btn-warning"><Link to="/home">Home</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-success"><Link to="/games">Games</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-danger"><Link to="/faqs">FAQs</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-info"><Link to="/settings">Settings</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary"><Link to="/">Logout</Link></button> &nbsp;&nbsp;&nbsp;
        </div>
      </nav>
      </header>
        <label htmlFor="First-Name-4" className="apply-field-label-large first"><font size="+2"><b>Please enter your username and password.</b></font></label>
        <p>
          
          </p>
        <div className="apply-form-group-item half"><label htmlFor="Name" className="apply-field-label-medium">Username *</label><input type="text" className="apply-text-field w-input" maxLength="256" name="Text" data-name="Text" id="Text" required=""/></div>&nbsp;&nbsp;&nbsp;

        <div className="apply-form-group-item half"><label htmlFor="Phone" className="apply-field-label-medium">Password *</label><input type="tel" className="apply-text-field w-input" maxLength="256" name="Phone" data-name="Phone" id="Phone" required=""/></div>&nbsp;&nbsp;&nbsp;
        <p>

        </p>
        <button class="btn"><Link to="/home">Log In</Link></button> <br></br>
      
    </div>
  );
}

export default Login;
