import React from 'react';
import logo from './logo.svg';
import './App.css';
import FAQs from './FAQs';
import Settings from './Settings';
import { Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
    <header className="App-header">
      <nav>
        <div>
          <button type="button" class="btn btn-warning"><Link to="/home">Home</Link></button> &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-success"><Link to="/games">Games</Link></button> &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-danger"><Link to="/faqs">FAQs</Link></button> &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-info"><Link to="/settings">Settings</Link></button> &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-primary"><Link to="/">Logout</Link></button>
        </div>
      </nav>
      </header>

      <img src="https://uploads-ssl.webflow.com/5c98fd7e7e3bc9bee0816b45/5c99709e0113b8a168fec8fa_RiseLogo_02.svg" className="App-logo" alt="logo" /> <br></br>

      <div class="container">
    <h2>Choose Your State:</h2>
    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">Find Your State Here
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li>    
    </ul>
  </div>
  </div>
    </div>
  );
}
export default Home;