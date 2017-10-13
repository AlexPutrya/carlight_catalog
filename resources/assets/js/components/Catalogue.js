import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Search from './Search';
import Table from './Table';

class Catalogue extends Component {
    constructor(props){
        super(props);
        this.state = {catalog : ''};
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }
    
    onChangeHandle(inputValue) {

        axios.get('/api_v1/catalog/'+inputValue)
        .then(function(response) {
            this.setState({catalog : response.data});
        }.bind(this));
    }

    render() {
        return (
            <div className="container-fluid">
                <header>
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <Search changeHandle = {this.onChangeHandle}/>
                </header>
                <Table catalog = {this.state.catalog}/>
            </div>
        );
    }
}

if(document.getElementById('root')) {
    ReactDOM.render(<Catalogue />, document.getElementById('root'));
}