import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import FAQs from './FAQs';
import { Switch, Route, Link } from "react-router-dom";

function Settings() {
  return (
    <div className="Settings">
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