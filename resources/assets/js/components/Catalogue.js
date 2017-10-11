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
        this.setState({catalog : inputValue});

        axios.get('/api_v1/catalog/')
        .then(function(response) {
            // var new_arr = response.data.forEach(function(element, index, array) {
            //     console.log(element); 
            // });
            console.log(response.data[0]);
            
        });
    }

    render() {
        return (
            <div>
                <Search changeHandle = {this.onChangeHandle}/>
                <Table catalog = {this.state.catalog}/>
            </div>
        );
    }
}

if(document.getElementById('root')) {
    ReactDOM.render(<Catalogue />, document.getElementById('root'));
}