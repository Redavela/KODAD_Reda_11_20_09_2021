import React, { Component } from 'react';
import Gallery from '../composants/Gallery';
import { apartments } from '../data/apartments';

class Apartment extends Component {
    
    // une fois récupérer filtrer les apartments pour récupérer celui qui a le bonne id => find
    // afficher les info de l'aprtements

    

    render() { 
        
        const pathID = this.props.match.params.id
        const apartment = apartments.find(apartment =>  apartment.id === pathID)
        const {pictures} = apartment
        return (
            <div>
                <Gallery pictures={pictures}  />
            </div>
        );
    }
}

export default Apartment;