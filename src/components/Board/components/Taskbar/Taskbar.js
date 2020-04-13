import React from 'react';
import PropTypes from 'prop-types';
import TaskContainer from '../Task/index';
import '../../css/Taskbar.css';

const Taskbar = (props) => {
    const { status, onDragOver, onDrop, tasksData } = props;
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
                {
                    tasksData
                        .filter(task => task.status === status)
                        .map(task => (
                            <TaskContainer
                                key={task.id}
                                id={task.id}
                                summary={task.summary}
                                assignee={task.assignee}
                                status={task.status}
                                project={task.project}
                                img={task.img}
                            />
                        ))
                }
            </div>
        </div>
    );
}

Taskbar.propTypes = {
    status: PropTypes.string.isRequired,
    onDragOver: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    tasksData: PropTypes.array.isRequired
}

export default Taskbar;