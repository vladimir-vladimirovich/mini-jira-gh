import React from 'react';
import FiltersPanel from './Filters';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from './selectors';
import * as actions from './actions';

class FiltersContainer extends React.Component {
    applyFilter = (event) => {
        event.preventDefault();

        const { dispatch } = this.props;

        dispatch(actions.setActiveFilter(event.target.id));
    }

    render() {
        const { filters } = this.props;

        return (
            <FiltersPanel
                filters={filters}
                applyFilter={this.applyFilter}
            />
        );
    }
}

FiltersContainer.propTypes = {
    dispatch: PropTypes.func,
    filters: PropTypes.array.isRequired
};

const enhance = connect(
    (state) => ({
        filters: selectors.getFilters(state)
    })
);

export default enhance(FiltersContainer);