import React, { Component } from 'react'
import ShopItem from './ShopItem';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

class ListView extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
    }
    render() {
        const { items } = this.props;
        return (
        <div className="listView">{
            items.map((item) =>(
            <ShopItem items={item} key={v4()}/>
            ))}
        </div>  
    )}
}

export default ListView