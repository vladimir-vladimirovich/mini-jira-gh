import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class TaskContainer extends React.Component {
    onDragStart = (event) => {
        event.dataTransfer.setData('taskId', this.props.id);
    }

    render() {
        let { id, summary, assignee, project, img } = this.props;

        return (
            <Task
                id={id}
                summary={summary}
                assignee={assignee}
                project={project}
                img={img}
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