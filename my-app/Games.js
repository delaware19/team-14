import React from 'react';
import logo from './logo.svg';
import './App.css';
import FAQs from './FAQs';
import Settings from './Settings';
import Home from './Home';
import { Switch, Route, Link } from "react-router-dom";


function Games() {
  return (
    <div className="Games">
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
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSA66Xqd-52PQ1bxqVUNsDC3VAx14yc0CaMEPhsYuCksDKEXJoayDIirixGf7nNsijN2Wz_gZfycFqG/embed?start=true&loop=true&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      <p><font size="+4"><b>View Game Levels:</b></font></p>
        <div>
        <p><font size="+2"><b>Phase 1: Research</b></font></p>
        <button type="button" class="btn btn-danger"><Link to="/level1">Level 1</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-danger"><Link to="/level2">Level 2</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-danger"><Link to="/level3">Level 3</Link></button> &nbsp;&nbsp;&nbsp;
        </div>
        <p></p>
        <div>
        <p><font size="+2"><b>Phase 2: Coalition Building</b></font></p>
        <button type="button" class="btn btn-warning"><Link to="/level4">Level 4</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-warning"><Link to="/level5">Level 5</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-warning"><Link to="/level6">Level 6</Link></button> &nbsp;&nbsp;&nbsp;
        </div>
        <p></p>
        <div>
        <p><font size="+2"><b>Phase 3: Storytelling</b></font></p>
        <button type="button" class="btn btn-info"><Link to="/level7">Level 7</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-info"><Link to="/level8">Level 8</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-info"><Link to="/level9">Level 9</Link></button> &nbsp;&nbsp;&nbsp;
        </div>
        <p></p>
        <div>
        <p><font size="+2"><b>Phase 4: Lawmaking</b></font></p>
        <button type="button" class="btn btn-primary"><Link to="/level10">Level 10</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary"><Link to="/level11">Level 11</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary"><Link to="/level12">Level 12</Link></button> &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary"><Link to="/level13">Level 13</Link></button> &nbsp;&nbsp;&nbsp;
        </div>
        <p></p>

    </div>
  );
}

export default Games;
