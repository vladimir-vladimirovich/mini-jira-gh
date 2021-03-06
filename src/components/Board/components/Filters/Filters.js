import React from 'react';
import PropTypes from 'prop-types';
import SearchContainer from '../Search/index';
import '../../css/Filters.css';

const FiltersPanel = (props) => {
    const { filters, applyFilter } = props;

    return (
        <div className="filtersPanel">
            <div className="quick-filters-container">
                <dt>
                    {'QUICK FILTERS:'}
                </dt>
                {
                    filters.map((filter) => (
                        <dd key={filter.id}>
                            <button
                                type="submit"
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
            <div className="quick-search-container">
                <SearchContainer />
            </div>
        </div>
    );
};

FiltersPanel.propTypes = {
    filters: PropTypes.array.isRequired,
    applyFilter: PropTypes.func.isRequired
};

export default FiltersPanel;