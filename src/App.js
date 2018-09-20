import React, { Component } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import DesarrolloNoticia from './components/DesarrolloNoticia';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
          <Route path={process.env.PUBLIC_URL + "/desarrollo"}  component={DesarrolloNoticia} />
        </div>
      </Router>
    );
  }
}

export default App;
