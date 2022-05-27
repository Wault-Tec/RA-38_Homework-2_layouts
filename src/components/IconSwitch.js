import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconSwitch extends Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        onSwitch: PropTypes.func.isRequired,
    }

  render() {
    return (
        <div className="storeHeader">
        <span className="material-icons" onClick={this.props.onSwitch}>
        {this.props.icon}
        </span>
        </div>
    )}
}

export default IconSwitch