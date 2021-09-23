import React, { Component } from 'react';
import '../css/Gallery.css'
import Slide from './Slide';

class Gallery extends Component {
    render() {
        const {pictures} = this.props
        const slides = pictures.map((picture, index) => (
            <Slide key={index} picture={picture}>
                {/* <div className="gallery">
                <img key={index} src={picture} alt=''/>
                </div> */}
            </Slide>
            
       ))

       // créer un composant enfant (slide) qui contient une slide et qui prend en props une image et elle affiche cette image
       // l'utiliser dans la boucle slides
       // ajouter une propriété active
       // créer une classe css qui permet de caché image
       // une autre pour en faire apparaitre une
       // créer un state qui permet de savoir l'index de l'image active
       // si c'est = 0 -1 = max(pictures) si var = 0 alors var = max(index)
       // tester l'event click sur right-arrow et left-arrow 

       
       
        return (
            <div className='container-gallery'>
                {slides}
                <span className='fas fa-chevron-left'></span>
                <span className='fas fa-chevron-right'></span>
            </div>
        );
    }
}

export default Gallery;