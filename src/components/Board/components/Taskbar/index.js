import React from 'react';
import PropTypes from 'prop-types';
import Taskbar from './Taskbar';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';
import '../../css/Taskbar.css';

class TaskbarContainer extends React.Component {
    onDragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        const { status, dispatch } = this.props;
        const taskId = event.dataTransfer.getData('taskId');
        
        dispatch(actions.updateTask({ id: taskId, status: status }))
    };

    render() {
        const { onDragOver, onDrop, props: { status, tasks } } = this;

        return (
            <Taskbar
                onDragOver={onDragOver}
                onDrop={onDrop}
                status={status}
                tasksData={tasks}
            />);
    }
}

TaskbarContainer.propTypes = {
    dispatch: PropTypes.func,
    tasks: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired
}

const enhance = connect(
    (state, props) => ({
        tasks: selectors.getTasks(state, props)
    })
);

export default enhance(TaskbarContainer);