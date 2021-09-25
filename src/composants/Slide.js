import React, { Component } from 'react';
import '../css/Slide.css'

class Slide extends Component {
    

    
    render() {
        const {picture, active} = this.props

    
        return (
            
            <div className="gallery">
                <img className={active ? 'visible' : 'hidden'} src={picture} alt=''/>
            </div>
            
        );
    }
}

export default Slide;