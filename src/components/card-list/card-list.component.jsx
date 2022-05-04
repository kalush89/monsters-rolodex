import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
    render(){
      return (
        <div className='card-list'>
        {
            this.props.monsters.map((monster) =>{
                return <Card key={monster.id} monster={monster} />;
             } )
        }
    </div>
      );
    }
}
/*
const CardList = ({monsters}) => (
        <div className='card-list'>
            {
                monsters.map((monster) =>{
                    return <Card key={monster.id} monster={monster} />;
                 } )
            }
        </div>
);
*/
export default CardList;
         