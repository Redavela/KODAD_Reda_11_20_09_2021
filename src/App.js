import './App.css';
import React, {Component} from 'react';
import Navigator from './composants/Navigator';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Apartment from './page/Apartment';


class App extends Component {

  render(){
    return (
      <div className="app">
      <Router>
          <Navigator />  
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/a-propos" component={About} exact/>
          <Route path="/apartment/:id" component={Apartment} exact/>
      </Switch>
      </Router>
      </div>
  )} 
}

export default App;
