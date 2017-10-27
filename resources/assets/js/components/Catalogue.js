import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Search from './Search';
import Table from './Table';
import Header from './Header';

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

        let main;
        if(this.state.catalog && this.state.catalog != ''){
            main = (<Table catalog = {this.state.catalog}/>);
        } else {
            main = (<img src="./img/car.svg"/>);
        }
        return (
            <div className="container-fluid">
                <Header/>
                <Search changeHandle = {this.onChangeHandle}/>
                {main}
            </div>
        );
    }
}
export default Catalogue;