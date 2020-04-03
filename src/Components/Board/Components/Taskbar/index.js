import React from 'react';
import PropTypes from 'prop-types';
import { TasksContext } from '../../Contexts/TasksContext';
import '../../css/Taskbar.css';
import Taskbar from './Taskbar';

class TaskbarContainer extends React.Component {
    static contextType = TasksContext;

    onDragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        const id = event.dataTransfer.getData('taskId');
        const updatedTasks = this.context.tasks.map(task => {
            if (task.id === id) {
                task.status = this.props.status;
                return task
            } else return task
        });
        this.context.setTasks(updatedTasks);
    };

    render() {
        return (
            <Taskbar
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
                status={this.props.status}
            />
        );
    }
}

TaskbarContainer.propTypes = {
    status: PropTypes.string.isRequired
}

export default TaskbarContainer;