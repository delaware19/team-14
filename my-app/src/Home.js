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
    <p><h3>Choose a State:</h3></p>
    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">Select one 
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Delaware</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">New York</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">New Jersey</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Florida</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">California</a></li>
    </ul>
  </div>

  <p><h3>Choose an Area of Law:</h3></p>
    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">Select one 
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Sexual assault</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Domestic violence</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Gun violence</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">All</a></li>
    </ul>
    
  </div>

  <br></br><br></br>
  <button class="btn"><Link to="/home">Search</Link></button> <br></br>

  </div>
    </div>
  );
}
export default Home;