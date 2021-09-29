import { Component } from 'react';
import logo from './../assets/logo.png';
import './../css/Navigator.css'
import {NavLink} from "react-router-dom";

class Navigator extends Component {
    
    render() {    
        
        const routes = [
            { label: 'Accueil', path: '/KODAD_Reda_11_20_09_2021',activeClassName:'nav-active'},
            { label: 'A propos', path: '/a-propos',activeClassName:'nav-active'}
        ];

        const links = routes.map((route, index) => (
             <li key={index}><NavLink exact to={route.path} activeClassName={route.activeClassName} >{route.label}</NavLink></li>
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