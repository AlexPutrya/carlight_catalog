import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Search from './Search';

class Catalogue extends Component {
    render() {
        return (
            <div>
                <Search />
                <h1>Hello Catalogue</h1>
            </div>
        );
    }
}

if(document.getElementById('root')) {
    ReactDOM.render(<Catalogue />, document.getElementById('root'));
}