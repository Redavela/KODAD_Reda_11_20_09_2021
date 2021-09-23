import React, { Component } from 'react';
import '../css/Slide.css'

class Slide extends Component {
    
    render() {console.log(this);
        const {index,picture} = this.props
        return (
            
            <div className="gallery">
                <img key={index} src={picture} alt=''/>
            </div>
            
        );
    }
}

export default Slide;