import React, { Component } from 'react';
import { apartments } from '../data/apartments';
import Card from './Card';
import './../css/Cards.css'

class ListingApartments extends Component {
    render() {

        const cards = apartments.map(apartment => <Card apartment={apartment} key={apartment.id}/>)

        return (
            <article className="rental-link">
                {cards}
            </article>
        );
    }
}

export default ListingApartments;