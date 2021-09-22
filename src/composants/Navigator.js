import { Component } from 'react';
import logo from './../assets/logo.png';
import './../css/Navigator.css'
import {Link} from "react-router-dom";

class Navigator extends Component {
    render() {       
        const routes = [
            { label: 'Acceuil', path: '/'},
            { label: 'A propos', path: 'a-propos'}
        ];

        const links = routes.map((route, index) => (
             <li key={index}><Link to={route.path}>{route.label}</Link></li>
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