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

        
        <h3> Level 1 </h3>
        <h4>
        <div class="container">Insert description for level one <br></br>
        Goal: Level One: Insert goal for level one  <br></br><br></br>
        

        </div></h4>

        <br></br>

        <p>
        <h3>
       <a href="https://www.ontheissues.org/default.htm">See what legislation our politicians support!</a>
       </h3>

        

        <br></br>
      

        </p>
    </div>
  );
}

export default Level1;