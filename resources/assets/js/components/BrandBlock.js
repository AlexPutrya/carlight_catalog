import React, { Component } from 'react';

import ModelsYearRow from './ModelsYearRow';

class BrandBlock extends Component {

    render() {

        var models_year_rows = this.props.models_years.map((row) => {
            return <ModelsYearRow info={row}/>
        });

        return (
            <tbody>
                <caption>{this.props.name}</caption>
                {models_year_rows}
            </tbody>

        );
    }
}

export default BrandBlock;