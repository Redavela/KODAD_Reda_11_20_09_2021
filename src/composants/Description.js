import React, {Component} from 'react';

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
      <div>
        <div>
          <div>
            <p>{apartment.title}</p>
            <p>{apartment.location}</p>
          </div>
          <div>
            <p>{apartment.host.name}</p>
            <img src={apartment.host.picture} alt="" />
          </div>
        </div>
                <div>
                    <div>
                    <ul>
                    {apartment.tags.map((tag, index) => (
                      
                      <li key={index}>{tag}</li>
            
                    ))}
                    </ul>
                    </div>
                    <div>
                    {[...Array(5).keys()].map(index => (
                        <li style={{color: index + 1 <= apartment.rating ? 'red': 'grey'}} key={index}>{index}</li>
            
                    ))}
                    </div>
                </div>
      </div>
    );
  }
}

export default Description;
