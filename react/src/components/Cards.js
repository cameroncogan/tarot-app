import React from 'react';
import Card from './Card';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Cards = props => {
  let cards = props.cards.map(card => {
    return(
      <Card
        key={card.id}
        id={card.id}
        image_path={card.image_path}
        storyStage={props.storyStage}
      />
    );
  })

  return (
    <div className='container-fluid'>
      <div className='row'>
        <ul>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            {cards}
        </ReactCSSTransitionGroup>
        </ul>
      </div>
    </div>
  )
}

export default Cards;
