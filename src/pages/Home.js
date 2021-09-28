import React, { Component } from 'react';
import Header from '../composants/Header';
import ListingApartments from '../composants/ListingApartments';
import img from './../assets/img1.png';

class Home extends Component {
    render() {
        return (
            <div>
                <Header img={img} content="Chez vous, partout et ailleurs"/> 
                <ListingApartments />
            </div>
        );
    }
}

export default Home;