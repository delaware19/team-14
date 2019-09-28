import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import FAQs from './FAQs';
import { Switch, Route, Link } from "react-router-dom";

function Settings() {
  return (
    <div className="Settings">

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

        <p>
        <h3>SETTINGS</h3>

          <button class="btn"><Link to="/">Edit Username</Link></button> <br></br><br></br>
            <button class="btn"><Link to="/">Change Email</Link></button> <br></br><br></br>
            <button class="btn"><Link to="/">Change Password</Link></button> <br></br><br></br>
        </p>
    </div>
  );
}

export default Settings;