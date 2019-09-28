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

        <label for="First-Name-4" class="apply-field-label-large first">Level 4: Meet with like-minded
        groups (nonprofits, cultural influences, etc.) and share your vision for change. Goal: make one
        contact and upload their information below. Reach out! After submitting, you're may proceed to 
        the next phase.</label> <br></br>

        <label class="apply-field-label-medium">Name *</label><div class="apply-form-group"><div class="apply-form-group-item w-clearfix"><input type="text" class="apply-text-field w-input" maxlength="256" name="Full-Name-4" data-name="Full Name 4" id="Full-Name-4" required=""/></div></div>
        
        <br></br>
        <div class="apply-form-group-item half"><label for="Phone" class="apply-field-label-medium">Phone *</label><input type="tel" class="apply-text-field w-input" maxlength="256" name="Phone" data-name="Phone" id="Phone" required=""/></div>
        
        <br></br>
        <div class="apply-form-group-item half"><label for="Email" class="apply-field-label-medium">Email *</label><input type="email" class="apply-text-field w-input" maxlength="256" name="Email" data-name="Email" id="Email" required=""/>
        
        <br></br>
        <br></br>
        <label class="apply-form-labels">Upload File</label><input type="text" class="apply-text-field w-input" maxlength="256" name="upload file" data-name="upload file" id="upload-file-1" required=""/></div>
        <br></br>
        
        <style>
        
        </style>


        <button type="button" onclick="alert('Submitted')" button class="button button">Submit</button>
        <button type="button" onclick="alert('Saved')" button class="button button">Save For Later</button>

        </p>
    </div>
  );
}

export default Level1;
