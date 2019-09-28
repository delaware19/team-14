import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Settings from './Settings';

import { Switch, Route, Link } from "react-router-dom";

function Level1() {
  return (
    <div className="Level4">

    <header className="App-header">
      <nav>
        <div>
        <button className="btn"><Link to="/games">Back to Games</Link></button>
        </div>
      </nav>
      </header>

        <label htmlFor="First-Name-4" className="apply-field-label-large first"><font size="+2"><b>In this page, you're able to leave your information and upload any relevant documents you may have. After submitting, you're able to proceed to the next phase.</b></font></label>

        <div className="apply-form-group-item half"><label htmlFor="Name" className="apply-field-label-medium">Name *</label><input type="text" className="apply-text-field w-input" maxLength="256" name="Text" data-name="Text" id="Text" required=""/></div>&nbsp;&nbsp;&nbsp;

        <div className="apply-form-group-item half"><label htmlFor="Phone" className="apply-field-label-medium">Phone *</label><input type="tel" className="apply-text-field w-input" maxLength="256" name="Phone" data-name="Phone" id="Phone" required=""/></div>&nbsp;&nbsp;&nbsp;

        <div className="apply-form-group-item half"><label htmlFor="Email" className="apply-field-label-medium">Email *</label><input type="email" className="apply-text-field w-input" maxLength="256" name="Email" data-name="Email" id="Email" required=""/></div>&nbsp;&nbsp;&nbsp;

        <form action="/action_page.php">
        <input type="file" name="pic" accept="image/*"></input>
        </form>
        <p>

        </p>



      <button className="btn"><Link to="/games">Submitted</Link></button>&nbsp;&nbsp;&nbsp;
      <button className="btn"><Link to="/home">Home</Link></button>&nbsp;&nbsp;&nbsp;

    </div>
  );
}

export default Level1;
