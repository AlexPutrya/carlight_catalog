import React, { Component } from 'react';

import BrandBlock from './BrandBlock';

class Table extends Component {

    render() {
        var brand_blocks = Object.entries(this.props.catalog).map(([brand_name, year_list]) => {
            return <BrandBlock key={brand_name} name={brand_name}  models_years={year_list}/>
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
                            <th>Повторители поворотников</th>
                            <th>Стояночный фонарь</th>
                            <th>Стоп-сигнал</th>
                            <th>Задний габаритный фонарь</th>
                            <th>Задний противотуманный фонарь</th>
                            <th>Фонарь заднего хода</th>
                            <th>Подсветка номера</th>
                        </tr>
                    </thead>
                    {brand_blocks}
            </table>
        );
    }
}

export default Table;