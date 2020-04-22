import React from 'react';
import FiltersPanel from './Filters';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from './selectors';

import * as actions from '../../actions';
import { fakeServerUtil } from '../../../../utils/fakeServer.util';

class FiltersContainer extends React.Component {
    applyFilter = (event) => {
        event.preventDefault();

        const { dispatch, filters } = this.props;
        const filterOptions = filters.find((item) => item.id === event.target.id)

        fakeServerUtil.getTasksData()
            .then((tasksData) => {
                let updatedTasks = tasksData;
        
                if (filterOptions.project) {
                    updatedTasks = updatedTasks.filter((task) => task.project === filterOptions.project);
                }
                if (filterOptions.summary) {
                    updatedTasks = updatedTasks.filter((task) => task.project === filterOptions.summary);
                }
        
                dispatch(actions.updateTasksAll(updatedTasks));        
            })
    }

    render() {
        const { filters } = this.props;

        return (
            <FiltersPanel
                filters={filters}
                applyFilter={this.applyFilter}
            />
        )
    }
}

FiltersContainer.propTypes = {
    dispatch: PropTypes.func,
    filters: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired
}

const enhance = connect(
    (state) => ({
        filters: selectors.getFilters(state),
        tasks: selectors.getTasks(state)
    })
);

export default enhance(FiltersContainer);