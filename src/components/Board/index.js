import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import { fakeServerUtil } from '../../utils/fakeServer.util';
import * as actions from './actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as selectors from './selectors';

class BoardContainer extends React.Component {
    componentDidMount() {
        this.updateTaskbar();
        this.updateTasks();
    }

    async updateTaskbar() {
        const { dispatch } = this.props;
        const taskbarData = await fakeServerUtil.getTaskbarConfig();

        dispatch(actions.updateTaskbar(taskbarData));
    }

    async updateTasks() {
        const { dispatch } = this.props;
        const fetchedTasksData = await fakeServerUtil.getTasksData();

        dispatch(actions.updateTasksAll(fetchedTasksData));
    }

    render() {
        const { columnNames } = this.props;

        return (
            <Board columnNames={columnNames} />
        )
    }
}

BoardContainer.propTypes = {
    dispatch: PropTypes.func,
    columnNames: PropTypes.array.isRequired
}

const enhance = compose(
    connect(
        (state) => ({
            columnNames: selectors.getColumnNames(state)
        })
    )
)

export default enhance(BoardContainer)