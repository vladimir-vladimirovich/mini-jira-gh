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
        this.init();
    }

    async init() {
        const { dispatch } = this.props;

        try {
            const [
                taskbarData,
                tasksData,
                filtersData,
                tasksConfig,
                employees
            ] = await Promise.all([
                fakeServerUtil.getTaskbarConfig(),
                fakeServerUtil.getTasksData(),
                fakeServerUtil.getFiltersConfig(),
                fakeServerUtil.getTasksConfig(),
                fakeServerUtil.getEmployees()
            ]);

            dispatch(actions.updateTaskbar(taskbarData));
            dispatch(actions.updateTasksAll(tasksData));
            dispatch(actions.updateFilters(filtersData));
            dispatch(actions.updateTasksConfig(tasksConfig));
            dispatch(actions.updateEmployees(employees));
        } catch (error) {
            console.error(error);
        }
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