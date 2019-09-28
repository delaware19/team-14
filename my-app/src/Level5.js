import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Settings from './Settings';


import { Switch, Route, Link } from "react-router-dom";

function Level5() {
  return (
    <div className="Level4">

    <header className="App-header">
      <nav>
        <div>
        <button class="btn"><Link to="/games">Back to Games</Link></button>
        </div>
      </nav>
      </header>

        <p>
        <h3>Level 5</h3>
        <div class="container"><p>Identify representatives and senators that support your cause. <br></br>
        Goal: Level Five: Identify Legislators with Passion for Your Cause and Share Your Personal Story
        </p></div>

        <br></br>
        <br></br>
        <div class="apply-form-group-item half"><label for="Name" class="apply-field-label-medium">Name *</label><input type="text" class="apply-text-field w-input" maxlength="256" name="Text" data-name="Text" id="Text" required=""/></div>

        <br></br>
        <div class="apply-form-group-item half"><label for="Phone" class="apply-field-label-medium">Phone *</label><input type="tel" class="apply-text-field w-input" maxlength="256" name="Phone" data-name="Phone" id="Phone" required=""/></div>
        
        <br></br>
        <div class="apply-form-group-item half"><label for="Email" class="apply-field-label-medium">Email *</label><input type="email" class="apply-text-field w-input" maxlength="256" name="Email" data-name="Email" id="Email" required=""/></div>
        
        <br></br>
        <form action="/action_page.php"><input type="file" name="pic" accept="image/*"></input>
        </form>

        
       <a href="https://www.ontheissues.org/default.htm">See what legislation our politicians support!</a>


        

        <br></br>
      <button type="button" onclick="alert('Submitted')" button class="button button">Submit</button>
      <button type="button" onclick="alert('Saved')" button class="button button">Save For Later</button>

        </p>
    </div>
  );
}

export default Level5;