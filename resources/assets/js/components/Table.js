import React, { Component } from 'react';

import BrandBlock from './BrandBlock';

class Table extends Component {

    render() {
        var brand_blocks = Object.entries(this.props.catalog).map(([brand_name, year_list]) => {
            return <BrandBlock name={brand_name}  models_years={year_list}/>
        });
        
        return (
            <table className="table table-hover table-sm table-responsive">
                    <thead>
                        <tr>
                            <th>Модель</th>
                            <th>Год выпуска</th>
                            <th>Ближний свет</th>
                            <th>Дальний свет</th>
                            <th>Противотуманные фары</th>
                        </tr>
                    </thead>
                {brand_blocks}
            </table>
        );
    }
}

export default Table;