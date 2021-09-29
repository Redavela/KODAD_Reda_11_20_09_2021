import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../css/Error.css';

class Error extends Component {
    render() {
        return (
    <div className="error">
        <main className="error-main">
            <p className="error-num">404</p>
            <p className="error-txt">
            Oops! La page que vous demandez n'existe pas.
            </p>
          <Link to="/" title="Home">
            Retourner sur la page d'accueil
          </Link>
        </main>
    </div>
        );
    }
}

export default Error;