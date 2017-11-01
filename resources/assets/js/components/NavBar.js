import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><Link to="/"> Каталог</Link></li>
                    <li><Link to="/bulbs"> Типы ламп</Link></li>
                    <li><Link to="/brands"> Производители</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;