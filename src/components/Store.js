import React, { Component } from 'react'
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';

const initialArr = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: initialArr,
            icon: "view_module",
        }
    }

    onSwitch = () => {
        let icon;
        if(this.state.icon === "view_module") {
            icon = "view_list";
        } else {
            icon = "view_module";
        }
        this.setState({
            ...this.setState,
            icon,
        })
    };

  render() {
    let appView;
    if(this.state.icon === "view_module") {
        appView = 
            <>
            <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch}/>
            <CardsView cards={this.state.products}/>
            </>
    } else if (this.state.icon === "view_list"){
        appView =  
            <>
            <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch}/>
            <ListView items={this.state.products}/>
            </>
    }
    return (
       <>{appView}</> 
    )
  }
}

export default Store