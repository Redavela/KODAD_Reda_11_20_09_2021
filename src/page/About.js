import React, { Component } from 'react';
import Header from '../composants/Header';
import img from '../assets/img2.png'

class About extends Component {
    render() {
        return (
            <div>
                <Header img={img}/>
            </div>
        );
    }
}

export default About;