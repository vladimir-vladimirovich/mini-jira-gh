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
        dispatch(actions.updateTasks(fetchedTasksData));
    }

    onDragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        let { status, dispatch, tasks } = this.props;
        const taskId = event.dataTransfer.getData('taskId');
        let postDropTaskData = tasks.map(task => {
            if (task.id === taskId) {
                task.status = status;
                return task
            } else return task
        });
        dispatch(actions.updateTasks(postDropTaskData));
    };

    render() {
        const { onDragOver, onDrop, props: { status, tasks } } = this;
        return (    
            <Taskbar
                onDragOver={onDragOver}
                onDrop={onDrop}
                status={status}
                tasksData={tasks}
            />
        );
    }
}

TaskbarContainer.propTypes = {
    dispatch: PropTypes.func,
    tasks: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired
}

const enhance = connect(
    (state) => ({
        tasks: selectors.getTasks(state)
    })
);

export default enhance(TaskbarContainer);