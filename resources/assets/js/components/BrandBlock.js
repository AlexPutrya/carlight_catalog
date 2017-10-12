import React, { Component } from 'react';

import ModelsYearRow from './ModelsYearRow';

class BrandBlock extends Component {

    render() {

        var models_year_rows = this.props.models_years.map((row) => {
            return <ModelsYearRow info={row}/>
        });

        return (
            <div className="brand-block">
                <h1>{this.props.name}</h1>
                {models_year_rows}
            </div>

        );
    }
}

export default BrandBlock;