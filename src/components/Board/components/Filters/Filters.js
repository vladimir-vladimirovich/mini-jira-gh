import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Filters.css';

const FiltersPanel = (props) => {
    const { filters, applyFilter } = props;

    return (
        <div className="filtersPanel">
            <dt>
                QUICK FILTERS:
            </dt>
            {
                filters.map((filter) => (
                    <dd key={filter.id}>
                        <button
                            id={filter.id}
                            className="filter-button"
                            onClick={applyFilter}
                        >
                            {filter.name}
                        </button>
                    </dd>
                ))
            }
        </div>
    )
}

FiltersPanel.propTypes = {
    filters: PropTypes.array.isRequired
}

export default FiltersPanel;