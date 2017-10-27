import React, { Component } from 'react';

import Header from './Header';

class Test extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <h1> Hello </h1>
            </div>
        );
    }
}

export default Test;