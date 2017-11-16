import React, { Component } from 'react';
import axios from 'axios';
import DocumentTitle from 'react-document-title';

import Search from '../components/Search';
import Table from '../components/Table';
import Header from '../components/Header';

class Catalogue extends Component {
    constructor(props){
        super(props);
        this.state = {catalog : ''};
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }
    
    onChangeHandle(inputValue) {
        axios.get('/api/v1/catalog/'+inputValue)
        .then(function(response) {
            this.setState({catalog : response.data});
        }.bind(this));
    }

    render() {

        let main;
        if(this.state.catalog && this.state.catalog != ''){
            main = (<Table catalog = {this.state.catalog}/>);
        } else {
            main = (<img className="main-car" src="./img/cactus.png"/>);
        }
        return (
            <DocumentTitle title="Быстрый подбор лампы по модели автомобиля">
                <div className="container-fluid">
                    <Header/>
                    <Search changeHandle = {this.onChangeHandle}/>
                    {main}
                </div>
            </DocumentTitle>
        );
    }
}
export default Catalogue;