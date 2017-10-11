import React, { Component } from 'react';

//import Row from './Row';

class Table extends Component {
    render() {
        return (
            //<Row />
            <div>
                {this.props.catalog}
            </div>

        );
    }
}

export default Table;