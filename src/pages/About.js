import React, { Component } from 'react'
import Header from '../composants/Header'
import img from '../assets/img2.png'
import Dropdown from '../composants/Dropdown'
import { abouts } from '../data/abouts'

class About extends Component {
    render() {

        const aboutsDropdown = abouts.map(({title, content}, index) =>{
            return <Dropdown key={index} title={title} content={content} />
        })
        return (
            <div>
                <Header img={img}/>
                {aboutsDropdown}
            </div>
        )
    }
}

export default About;