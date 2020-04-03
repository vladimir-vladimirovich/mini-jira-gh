import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class TaskContainer extends React.Component {
    onDragStart = (event) => {
        event.dataTransfer.setData('taskId', this.props.id);
    }

    render() {
        return (
            <Task
                id={this.props.id}
                summary={this.props.summary}
                assignee={this.props.assignee}
                project={this.props.project}
                img={this.props.img}
                onDragStart={this.onDragStart}
            />
        )
    }
}

TaskContainer.propTypes = {
    id: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    assignee: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    img: PropTypes.string
}

export default TaskContainer;