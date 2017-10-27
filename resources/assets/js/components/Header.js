import React, { Component } from 'react';

import NavBar from './NavBar';

class Header extends Component {
    render() {
        return(
            <header>
                <img src="./img/logo.png" className="logo"/>
                <div className="banner">
                    <img src="./img/bulbs.jpg"/>
                    <h3>подбор автоламп по марке и моделе автомобиля</h3>  
                </div>
                <NavBar/>
            </header>
        );
    }
}
export default Header;