import { Component } from 'react';
import './../css/Header.css'




class Header extends Component {
    render() {
      return (
        <div className="header">
          <header className="main-header">
          <div className="banner">
          <div className="banner-cover"></div>
            <img className="img" src={this.props.img} alt="Landscape"/>
            <h2>{this.props.content}</h2>
          </div>
          </header>
        </div>
      );
    }
  }
  
  export default Header;