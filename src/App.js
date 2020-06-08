import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Style.css';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';
import MediaLanding from './Components/MediaLanding';

function App() {
  return (
    <Router>    
      <Switch>
        <Route exact path='/' component={MediaLanding} />
      </Switch>
    </Router>
  );
}

export default App;
