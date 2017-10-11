import React, { Component } from 'react';

class Search extends Component {

    findValue(event) {
        this.props.changeHandle(event.target.value);
    }

    render() {
        return (
            <input type="text" placeholder="Марка, модель" onChange={this.findValue.bind(this)}/>
        );
    }
}

export default Search;