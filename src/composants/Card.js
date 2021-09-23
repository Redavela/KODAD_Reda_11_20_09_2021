import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Card extends Component {
    render() {
        const {apartment} = this.props;
        return (
            <div className="cards-link">
                <Link to={`/apartment/${apartment.id}`}>
                <div className="cards"></div>
                <img src={apartment.cover} alt={apartment.title} />
                <h2>{apartment.title}</h2>
                </Link>
            </div>
        );
    }
}

export default Card;