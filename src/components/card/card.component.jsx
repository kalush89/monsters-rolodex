import React from 'react';
import { Component } from 'react';
import './card.styles.css';
class Card extends Component {
   
    render(){
        const {id, name, email} = this.props.monster;
        return(
            <div key={id} className='card-container'>
        <img
            alt='monster'
            src={`https://robohash.org/${id}?set=set2&size=120x120`}
        />
        <h2>
            {name}
        </h2>
        <p>
            {email}
        </p>
        
    </div>
        );
    }
}


/*const Card = ({monster: { id, name, email } }) => {
    
    return(
    
    <div className='card-container'>
        <img
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=120x120`}
        />
        <h2>
            {name}
        </h2>
        <p>
            {email}
        </p>
        
    </div>
)
    }*/
export default Card;