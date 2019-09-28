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
        <div class="container">Discover your voice and find your passion! <br></br>
        Goal: Level One: What motivates you? What would you like to see change?   <br></br><br></br>
        

        </div></h4>

        <br></br>
        <img src="http://blogs.eltiempo.com/wrong-way-corrigan/wp-content/uploads/sites/517/2019/04/Motivation_02.jpg" className="App-logo" alt="logo" /> <br></br>
        
        <p>
        <h3>
       <a href="https://www.thelawyerportal.com/free-guides/legal-news-hot-topics-2019/">Click here to research today's most pressing legal matters</a>
       </h3>

        

        <br></br>
      

        </p>
    </div>
  );
}

export default Level1;