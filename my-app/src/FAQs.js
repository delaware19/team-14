import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Settings from './Settings';
import { Switch, Route, Link } from "react-router-dom";

function FAQs() {
  return (
    <div className="FAQs">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
    <link rel="stylesheet" type="text/css" href="engine1/style.css" />
    <script type="text/javascript" src="engine1/jquery.js"></script>

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

        <div class="container"><p>
        <h2>Frequently Asked Questions:</h2> <br></br>

        <h4>What is Hopeanomics?</h4>
        The Hopeanomics™ organizing curriculum serves as the blueprint to drive democracy and 
        scale hope that can easily be applied to other social issues, empowering ordinary citizens 
        to pen their own civil rights into existence. By gamifying the process of law-making, Rise 
        has innovated hope and democratized power.
        <br></br> <br></br>

        <h4>Is this curriculum only available online?</h4>
        No! We also offer in-person, one-on-one training to help keep you as informed as possible.
        <br></br> <br></br>

        <h4>How can I get more involved?</h4>
        If your interested in joining our team, go to our
        application page <a href="https://www.risenow.us/apply" target="_blank">HERE</a>!
        </p>
        </div> 
    </div>
  );
}

export default FAQs;