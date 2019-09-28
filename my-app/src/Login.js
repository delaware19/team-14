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
        <header className="App-header"></header>

        <p> Login here!</p>

        <button class="btn"><Link to="/home">Submit</Link></button> <br></br>
      
    </div>
  );
}

export default Login;
