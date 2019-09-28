import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Settings from './Settings';

import { Switch, Route, Link } from "react-router-dom";

function Level1() {
  return (
    <div className="Level1">

    <header className="App-header">
      <nav>
        <div>
        <button class="btn"><Link to="/games">Back to Games</Link></button>
        </div>
      </nav>
      </header>

        <p>

        <label for="First-Name-4" class="apply-field-label-large first">In this page, you're able to leave your information and upload any relavent documents you may have. After submittin, you're able to proceed to the next phase.</label>

        <div class="apply-form-group-item half"><label for="Name" class="apply-field-label-medium">Name *</label><input type="text" class="apply-text-field w-input" maxlength="256" name="Text" data-name="Text" id="Text" required=""/></div>

        <div class="apply-form-group-item half"><label for="Phone" class="apply-field-label-medium">Phone *</label><input type="tel" class="apply-text-field w-input" maxlength="256" name="Phone" data-name="Phone" id="Phone" required=""/></div>

        <div class="apply-form-group-item half"><label for="Email" class="apply-field-label-medium">Email *</label><input type="email" class="apply-text-field w-input" maxlength="256" name="Email" data-name="Email" id="Email" required=""/>

        <form action="/action_page.php">
        <input type="file" name="pic" accept="image/*">
        </form>

        <style>
      .button {
        border: none;
        color: black;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      }

      .button {border-radius: 12px;}
      </style>


      <button type="button" onclick="alert('Submitted')" button class="button button">Submit</button>
      <button type="button" onclick="alert('Saved')" button class="button button">Save For Later</button>


        </p>
    </div>
  );
}

export default Level1;
