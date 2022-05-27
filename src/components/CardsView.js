import React, { Component } from 'react'
import ShopCard from './ShopCard';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

class CardsView extends Component {
    static propTypes = {
        cards: PropTypes.array.isRequired,
    }
    render() {
        const { cards } = this.props;
        return (
        <div className="cardView">{
            cards.map((item) =>(
            <ShopCard card = {item} key={v4()}/>
        ))}
        </div>
    )}
}

export default CardsView