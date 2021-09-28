import React, { Component } from 'react';
import logoFooter from './../assets/logo-footer.png';
import './../css/Footer.css'

class Footer extends Component {
    render() {
        return (

        <footer className="main-footer">
            <img src={logoFooter} alt="Kasa" />
            <p>
            <span className="far fa-copyright"></span> 2020 Kasa. All rights reserved
            </p>
        </footer>

        );
    }
}
export default Footer;