import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import FAQs from './FAQs';
import Settings from './Settings';
import Login from './Login';
import Games from './Games';
import CreateAccount from './CreateAccount';
import Level1 from './Level1';
import Level4 from './Level4';
import Level5 from './Level5';
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/faqs">
          <FAQs />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/createaccount">
          <CreateAccount />
        </Route>
        <Route path="/level1">
          <Level1 />
        </Route>
        <Route path="/level4">
          <Level4 />
        </Route>
        <Route path="/level5">
          <Level5 />
        </Route>
        

        <Route path="/">
          <header className="App-header">
          <img src="https://uploads-ssl.webflow.com/5c98fd7e7e3bc9bee0816b45/5ca67dd40adf050aede96294_Asset%201.svg"/>  
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
          </header>
          <br></br><h3><font size="+4"><b><p>Welcome to Rise!</p></b></font></h3>
          <div class="container"><p><b><font size="+2"> Rise is grounded in the belief that the voices of ordinary citizens matter, 
            regardless of their background or age. This social movement blueprint revolutionizes 
            how laws are created by organizing and empowering citizens to pen their own rights 
            into existence. By identifying key battleground states, catalyst points for the movement, 
            Rise creates a ripple of inspiration in other states across the nation demanding these 
            rights are codified. The process—training organizers, telling compelling narratives in 
            the media,creating visual cultural moments of protest, pushing legislators and building 
            support between unexpected allies—has helped pass 21 bills to date.</font></b></p></div><br></br><br></br>
            <button type="button" class="btn btn-success"><Link to="/login">Login</Link></button> &nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-info"><Link to="/createaccount">Create an Account</Link></button> &nbsp;&nbsp;&nbsp;
        </Route>
      </Switch>

      <p></p>
      
    </div>
  );
}

export default App;
