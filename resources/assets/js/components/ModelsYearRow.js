import React, { Component } from 'react';

class ModelsYearRow extends Component {

    render() {

        var info = this.props.info;
        
        return (
            <tr>
                <td>{info.model_name}</td>
                <td>{info.year_range}</td>
                <td>{info.low_beam}</td>
                <td>{info.high_beam}</td>
                <td>{info.fog_light}</td>
            </tr>
       );
    }
}

export default ModelsYearRow;