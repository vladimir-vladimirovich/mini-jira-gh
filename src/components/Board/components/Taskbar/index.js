import React from 'react';
import PropTypes from 'prop-types';
import Taskbar from './Taskbar';
import { connect } from 'react-redux';
import { fakeServerUtil } from '../../../../utils/fakeServer.util';
import * as actions from './actions';
import * as selectors from './selectors';
import '../../css/Taskbar.css';

class TaskbarContainer extends React.Component {
    componentDidMount() {
        this.updateTasks();
    }

    async updateTasks() {
        const { dispatch } = this.props;
        let fetchedTasksData = await fakeServerUtil.getTasksData();

        dispatch(actions.updateTasksAll(fetchedTasksData));
    }

    onDragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        let { status, dispatch } = this.props;
        const taskId = event.dataTransfer.getData('taskId');
        
        dispatch(actions.updateTask({ id: taskId, status: status }))
    };

    render() {
        const { onDragOver, onDrop, props: { status, tasksFilteredByStatus } } = this;

        return (
            <Taskbar
                onDragOver={onDragOver}
                onDrop={onDrop}
                status={status}
                tasksData={tasksFilteredByStatus}
            />);
    }
}

TaskbarContainer.propTypes = {
    dispatch: PropTypes.func,
    tasksFilteredByStatus: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired
}

const enhance = connect(
    (state, props) => ({
        tasksFilteredByStatus: selectors.getTasksByStatus(state, props)
    })
);

export default enhance(TaskbarContainer);