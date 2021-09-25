import React, { Component } from 'react';
import '../css/Gallery.css'
import Slide from './Slide';

class Gallery extends Component {
    state = {
        currentImg: 0,
    };
    
    nextImage = () => {
        this.setState((prevState) => ({
          currentImg:
            prevState.currentImg === this.props.pictures.length - 1
              ? 0
              : prevState.currentImg + 1,
        }));
      };


    previousImage = () => {
        this.setState((prevState) => ({
          currentImg:
            prevState.currentImg === 0
              ? this.props.pictures.length - 1
              : prevState.currentImg - 1,
        }));
      };
    



    render() {
        
        const {pictures} = this.props
        const slides = pictures.map((picture, index) => (
            <Slide active={this.state.currentImg === index} key={index} picture={picture}/>
       ))

          
        return (
            <div className='container-gallery'>
                {slides}
                <span className='fas fa-chevron-left' onClick={this.previousImage}></span>
                <span className='fas fa-chevron-right' onClick={this.nextImage}></span>
            </div>
        );
    }
}

export default Gallery;