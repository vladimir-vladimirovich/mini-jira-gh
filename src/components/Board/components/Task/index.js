import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import * as commonActions from '../../commonActions';
import * as actions from './actions';
import { connect } from 'react-redux';
import { fakeServerUtil } from '../../../../utils/fakeServer.util';

class TaskContainer extends React.Component {
    onDragStart = (event) => {
        event.dataTransfer.setData('taskId', this.props.id);
    }

    onClick = (event) => {
        const { dispatch } = this.props;

        dispatch(commonActions.setSidebarVisibility(true));
        dispatch(actions.setSidebarTask(event.currentTarget.id));

        dispatch(actions.setLoading(true));
        fakeServerUtil.getTaskData(event.currentTarget.id)
            .then(taskData => {
                dispatch(actions.setTaskData(taskData));
                dispatch(actions.setLoading(false));
            });
    }

    render() {
        const { id, summary, assignee, project, img } = this.props;

        return (
            <Task
                id={id}
                summary={summary}
                assignee={assignee}
                project={project}
                img={img}
                onDragStart={this.onDragStart}
                onClick={this.onClick}
            />
        );
    }
}

TaskContainer.propTypes = {
    id: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    assignee: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    img: PropTypes.string,
    dispatch: PropTypes.func.isRequired
};

const enhance = connect();

export default enhance(TaskContainer);