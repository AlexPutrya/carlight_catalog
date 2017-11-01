import React, { Component } from 'react';

import Header from '../components/Header';
import axios from 'axios';

class Bulbs extends Component {
    render() {

        return (
            <div className="container-fluid">
                <Header/>
                <h1> Типы ламп </h1>
            </div>
        );

    }
}

export default Bulbs;