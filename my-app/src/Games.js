import React from 'react';
import logo from './logo.svg';
import './App.css';
import FAQs from './FAQs';
import Settings from './Settings';
import Home from './Home';
import { Switch, Route, Link } from "react-router-dom";

function Games() {
  return (
    <div className="Games">

    <header className="App-header">
      <nav>
        <div>
        <button class="btn"><Link to="/home">Home</Link></button>
        <button class="btn"><Link to="/games">Games</Link></button>
        <button class="btn"><Link to="/faqs">FAQs</Link></button>
        <button class="btn"><Link to="/settings">Settings</Link></button>
        <button class="btn"><Link to="/">Logout</Link></button>
        </div>
      </nav>
      </header>

      <img src={logo} className="App-logo" alt="logo" /> <br></br>

        <p>
          This is the Games page. <br></br><br></br>

          <button class="btn"><Link to="/level1">Level 4</Link></button>
        </p>
    </div>
  );
}

export default Games;