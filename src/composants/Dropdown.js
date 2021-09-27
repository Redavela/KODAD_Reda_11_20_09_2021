import React, { Component } from 'react';
import './../css/Dropdown.css'

class Dropdown extends Component {
    state = {
        toggle : false
    }
    toggleElt = ()=>{
        this.setState((oldState) =>({
            toggle : oldState.toggle ? false : true
        }))
    }
    

    render() {
        const {content, title} = this.props;
        const{toggle} = this.state;
        return (
            <div className="dropdown">
            <h3 onClick={() => this.toggleElt()}>
              {title}
              <span
                className={toggle ? "fas fa-chevron-up" : "fas fa-chevron-down"}
              ></span>
            </h3>
    
            {Array.isArray(content) ? (
              <ul
                className={`dropdown-list ${toggle ? "drop-open" : "drop-close"}`}
              >
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className={`dropdown-list ${toggle ? "drop-open" : "drop-close"}`}>
                {content}
              </p>
            )}
          </div>
        );
    }
}

export default Dropdown;