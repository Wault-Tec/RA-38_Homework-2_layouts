import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShopItem extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
    }
  render() {
    const { items } = this.props;
    return (
        <div className="itemWrapper">
            <img className="itemImg" src={items.img}/>
            <div className="cardName listName">{items.name}</div>
            <div className="cardColor listColor">{items.color}</div>
            <div className="cardPrice ListPrice">${items.price}</div>
            <button className="cardBtn">add to cart</button>
        </div>
    )}
}

export default ShopItem