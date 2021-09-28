import React, { Component } from 'react';
import Error from './Error';
import Description from '../composants/Description';
import Dropdown from '../composants/Dropdown';
import Gallery from '../composants/Gallery';
import { apartments } from '../data/apartments';
import './../css/Apartment.css';

class Apartment extends Component {
    

    

    render() { 
        
        const pathID = this.props.match.params.id
        const apartment = apartments.find(apartment =>  apartment.id === pathID)
        if(apartment === undefined){
            return <Error />
        }
        const {pictures, description, equipments } = apartment
        return (
            <div>
                <Gallery pictures={pictures}  />
                <main className='main-description'>
                <Description apartment={apartment} />
                <section className='dropDown-all'>
                <Dropdown title="Description" content={description} />
                <Dropdown title="Equipements" content={equipments} />
                </section>
                </main>

            </div>
        );
    }
}

export default Apartment;