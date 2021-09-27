import React, {Component} from 'react';
import './../css/Description.css';

class Description extends Component {

  // style
  // creer composant 
  // div => header avec un event onClick, il ajoute ou supprime une classe
  // creer une div avec le contenu
  // creer un state permettant de savoir si c'est ouvert ou fermé 
  // essayer de trigger l'ouvert et la fermeture du dropdown

  render () {
    const {apartment} = this.props;
    return (
        <header className='header-description'>
          <div>
            <h2>{apartment.title}</h2>
            <p>{apartment.location}</p>
          
            {apartment.tags.map((tag, index) => (
              
              <div className='tag' key={index}>{tag}</div>
    
            ))} 
          </div>
          <div className='host-description'>
          <div className='host'>
            <p>{apartment.host.name}</p>
            <img src={apartment.host.picture} alt="" />
          </div>
            <div className='host-rate'>
            {[...Array(5).keys()].map(index => (
                <span className='fas fa-star fill' style={{color: index + 1 <= apartment.rating ? 'red': 'grey'}} key={index}></span>
    
            ))}
            </div>
            </div>
        </header>
    );
  }
}

export default Description;
