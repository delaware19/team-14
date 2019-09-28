import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Settings from './Settings';
import { Switch, Route, Link } from "react-router-dom";

function FAQs() {
  return (
    <div className="FAQs">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
    <link rel="stylesheet" type="text/css" href="engine1/style.css" />
    <script type="text/javascript" src="engine1/jquery.js"></script>

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


        <p>
        <h2>Frequently Asked Questions:</h2>
        </p>
    </div>
  );
}

export default FAQs;