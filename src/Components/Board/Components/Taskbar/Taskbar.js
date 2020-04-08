import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TaskContainer from '../Task/index';
import '../../css/Taskbar.css';

const Taskbar = (props) => {
    let { status, onDragOver, onDrop } = props;
    const tasksData = useSelector(state => state.tasksReducer);

    return (
        <div className="taskbar">
            <div className="taskbar-title">
                <p>{status}</p>
            </div>
            <div
                className="taskbar-list"
                onDragOver={onDragOver}
                onDrop={onDrop}
            >
                {tasksData.map((task) => {
                    if (task.status === status) {
                        return (
                            <TaskContainer
                                key={task.id}
                                id={task.id}
                                summary={task.summary}
                                assignee={task.assignee}
                                status={task.status}
                                project={task.project}
                                img={task.img}
                            />
                        )
                    }
                })}
            </div>
        </div>
    );
}

Taskbar.propTypes = {
    status: PropTypes.string.isRequired,
    onDragOver: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired
}

export default Taskbar;