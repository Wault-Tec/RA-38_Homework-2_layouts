import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShopCard extends Component {
  static propTypes ={
    card: PropTypes.object.isRequired,
  }

  render() {
    const { card } = this.props;
    return (
        <div className="cardWrapper">
          <img className="cardImg" src={card.img}/>
          <div className="cardName">{card.name}</div>
          <div className="cardColor">{card.color}</div>
          <div className="cardFooter">
            <div className="cardPrice">${card.price}</div>
            <button className="cardBtn">add to cart</button>
          </div>
        </div>
    )
  }
}

export default ShopCard