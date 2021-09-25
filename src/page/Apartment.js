import React, { Component } from 'react';
import Description from '../composants/Description';
import Gallery from '../composants/Gallery';
import { apartments } from '../data/apartments';

class Apartment extends Component {
    

    

    render() { 
        
        const pathID = this.props.match.params.id
        const apartment = apartments.find(apartment =>  apartment.id === pathID)
        const {pictures} = apartment
        return (
            <div>
                <Gallery pictures={pictures}  />
                <Description apartment={apartment} />
            </div>
        );
    }
}

export default Apartment;