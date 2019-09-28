import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Settings from './Settings';


import { Switch, Route, Link } from "react-router-dom";

function Level3() {
  return (
    <div className="Level3">

    <header className="App-header">
      <nav>
        <div>
        <button class="btn"><Link to="/games">Back to Games</Link></button>
        </div>
      </nav>
      </header>

        
        <h3> Level 3 </h3>
        <h4>
        <div class="container">Insert description for level three <br></br>
        Goal: Level Three: Insert goal for level three  <br></br><br></br>
        

        </div></h4>

        <br></br>
        <img src="https://uploads-ssl.webflow.com/5c98fd7e7e3bc9bee0816b45/5c99709e0113b8a168fec8fa_RiseLogo_02.svg" className="App-logo" alt="logo" /> <br></br>
        <p>
        <h3>
       <a href="https://www.ontheissues.org/default.htm">See what legislation our politicians support!</a>
       </h3>

        

        <br></br>
      

        </p>
    </div>
  );
}

export default Level3;