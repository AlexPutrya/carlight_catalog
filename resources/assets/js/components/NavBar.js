import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><Link to="/"> Каталог</Link></li>
                    <li><Link to="/test"> Типы ламп</Link></li>
                    <li><Link to="/test2"> Производители</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;