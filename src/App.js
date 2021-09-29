import './App.css';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Apartment from './pages/Apartment';
import Error from './pages/Error';
import Navigator from './composants/Navigator';
import Footer from './composants/Footer';


class App extends Component {
  render(){

    return (
      <div className="app">
      <Router>
        <Navigator currentPath={window.location.pathname} />  
        <Switch>
            <Route path="/KODAD_Reda_11_20_09_2021" component={Home} exact/>
            <Route path="/a-propos" component={About} exact/>
            <Route path="/apartment/:id" component={Apartment} exact/>
            <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
      </div>
  )} 
}

export default App;
