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
                <td>{info.front_indicator}</td>
                <td>{info.parking_light}</td>
                <td>{info.stop_light}</td>
                <td>{info.tail_light}</td>
                <td>{info.fog_warning_light}</td>
                <td>{info.backup_light}</td>
                <td>{info.license_plate_light}</td>
            </tr>
       );
    }
}

export default ModelsYearRow;