import React, { Component } from 'react';

import BrandBlock from './BrandBlock';

class Table extends Component {

    render() {
        var brand_blocks = Object.entries(this.props.catalog).map(([brand_name, year_list]) => {
            return <BrandBlock name={brand_name}  models_years={year_list}/>
        });

        return (
            <div className="table">
                {brand_blocks}
            </div>

        );
    }
}

export default Table;