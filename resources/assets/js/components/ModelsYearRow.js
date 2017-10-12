import React, { Component } from 'react';

class ModelsYearRow extends Component {

    render() {

        var info = this.props.info;
        
        return (
            <div className="row">
                <div className="cell">{info.model_name}</div>
                <div className="cell">{info.year_range}</div>
                <div className="cell">{info.low_beam}</div>
            </div>
       );
    }
}

export default ModelsYearRow;