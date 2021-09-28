import { Component } from 'react';
import logo from './../assets/logo.png';
import './../css/Navigator.css'
import {Link} from "react-router-dom";

class Navigator extends Component {
    state = {
        currentLocation: window.location.pathname
    };

    
    render() {    
        
        const routes = [
            { label: 'Acceuil', path: '/'},
            { label: 'A propos', path: '/a-propos'}
        ];

        const links = routes.map((route, index) => (
             <li key={index}><Link onClick={() => {}} className={this.state.currentLocation === route.path ? 'toto': ''} to={route.path}>{route.label}</Link></li>
        ))
        
        return (
            <nav className="main-nav">
                <img className="logo" src={logo} alt="Logo du site Kasa"/>
                <ul>
                    {links}
                </ul>
            </nav>
            
        );
    }
}

export default Navigator;