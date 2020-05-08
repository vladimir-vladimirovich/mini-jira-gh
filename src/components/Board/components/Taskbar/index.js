import React from 'react';
import PropTypes from 'prop-types';
import Taskbar from './Taskbar';
import { connect } from 'react-redux';
import * as commonActions from '../../commonActions';
import * as selectors from './selectors';
import '../../css/Taskbar.css';

class TaskbarContainer extends React.Component {
    onDragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        const { status, dispatch } = this.props;
        const taskId = event.dataTransfer.getData('taskId');

        dispatch(commonActions.updateTask({ id: taskId, status }));
    };

    render() {
        const { status, tasks } = this.props;

        return (
            <Taskbar
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
                status={status}
                tasksData={tasks}
            />);
    }
}

TaskbarContainer.propTypes = {
    dispatch: PropTypes.func,
    tasks: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired
};

const enhance = connect(
    (state, props) => ({
        tasks: selectors.getTasks(state, props)
    })
);

export default enhance(TaskbarContainer);