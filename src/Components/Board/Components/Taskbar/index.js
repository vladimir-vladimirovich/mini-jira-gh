import React from 'react';
import PropTypes from 'prop-types';
import Taskbar from './Taskbar';
import { connect } from 'react-redux';
import { fakeServerUtil } from '../../../../utils/fakeServer.util';
import { updateTasks } from '../../actions/index';
import '../../css/Taskbar.css';

class TaskbarContainer extends React.Component {
    componentDidMount() {
        this.updateTasks();
    }

    async updateTasks() {
        let tasksData = await fakeServerUtil.getTasksData();
        this.props.updateTasks(tasksData);
    }

    onDragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        let { status } = this.props;
        let { tasksReducer } = this.props.tasksStore;
        const id = event.dataTransfer.getData('taskId');
        const updatedTasks = tasksReducer.map(task => {
            if (task.id === id) {
                task.status = status;
                return task
            } else return task
        });
        this.props.updateTasks(updatedTasks);
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
    updateTasks: PropTypes.func,
    tasksStore: PropTypes.object,
    status: PropTypes.string
}

export default connect(
    state => ({
        tasksStore: state
    }),
    dispatch => ({
        updateTasks: (tasks) => {
            dispatch(updateTasks(tasks))
        }
    })
)(TaskbarContainer);