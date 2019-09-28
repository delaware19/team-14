import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Settings from './Settings';


import { Switch, Route, Link } from "react-router-dom";

function Level2() {
  return (
    <div className="Level2">

    <header className="App-header">
      <nav>
        <div>
        <button class="btn"><Link to="/games">Back to Games</Link></button>
        </div>
      </nav>
      </header>

        
        <h3> Level 2 </h3>
        <h4>
        <div class="container">Research the political landscape for your state.  <br></br>
        Goal: Find out exactly how the legislative process works in your area. What do you have to do to affect change? <br></br><br></br>
        </div></h4>
        <br></br>

    
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
    </ul>
    
  </div>
</div>


<br></br>
<br></br>

        <img src="https://www.guttmacher.org/sites/default/files/styles/focal_point_preview/public/images/statelawsandpoliciesdarkgreen.jpg?itok=_gbiB8KM&amp;timestamp=1459353974" className="App-logo" alt="logo" /> <br></br>


        <p>
        <h3>
       <a href="https://www.justice.gov/civil/current-and-recent-cases">Click here to see an overview of important federal cases!</a>
       </h3>

        

        <br></br>
      

        </p>
    </div>
  );
}

export default Level2;