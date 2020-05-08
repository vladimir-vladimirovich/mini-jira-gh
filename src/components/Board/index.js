import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import * as actions from './actions';
import * as selectors from './selectors';
import { fakeServerUtil } from '../../utils/fakeServer.util';
import { connect } from 'react-redux';
import { compose } from 'redux';

class BoardContainer extends React.Component {
    componentDidMount() {
        this.updateTaskbar();
        this.updateTasks();
        this.updateFilters();
        this.updateTaskConfig();
        this.updateEmployees();
    }

    async updateTaskbar() {
        const { dispatch } = this.props;
        const taskbarData = await fakeServerUtil.getTaskbarConfig();

        dispatch(actions.updateTaskbar(taskbarData));
    }

    async updateTasks() {
        const { dispatch } = this.props;
        const tasksData = await fakeServerUtil.getTasksData();

        dispatch(actions.updateTasksAll(tasksData));
    }

    async updateFilters() {
        const { dispatch } = this.props;
        const filtersData = await fakeServerUtil.getFiltersConfig();

        dispatch(actions.updateFilters(filtersData));
    }

    async updateTaskConfig() {
        const { dispatch } = this.props;
        const tasksConfig = await fakeServerUtil.getTasksConfig();

        dispatch(actions.updateTasksConfig(tasksConfig));
    }

    async updateEmployees() {
        const { dispatch } = this.props;
        const employees = await fakeServerUtil.getEmployees();

        dispatch(actions.updateEmployees(employees));
    }

    render() {
        const { columnNames } = this.props;

        return (
            <Board columnNames={columnNames} />
        );
    }
}

BoardContainer.propTypes = {
    dispatch: PropTypes.func,
    columnNames: PropTypes.array.isRequired
};

const enhance = compose(
    connect(
        (state) => ({
            columnNames: selectors.getColumnNames(state)
        })
    )
);

export default enhance(BoardContainer);