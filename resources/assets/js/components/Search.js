import React, { Component } from 'react';

class Search extends Component {

    findValue(event) {
        this.props.changeHandle(event.target.value);
    }

    render() {
        return (
            <div className="search">
                <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                        Search
                    </span>
                    <input className="form-control" type="text" placeholder="Марка, модель" onChange={this.findValue.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Search;