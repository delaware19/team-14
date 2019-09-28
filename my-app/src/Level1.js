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
          This is the Level 1 page.
        </p>
    </div>
  );
}

export default Level1;