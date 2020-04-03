import React from 'react';
import PropTypes from 'prop-types';
import { TasksContext } from '../../Contexts/TasksContext';
import TaskContainer from '../Task/index';
import '../../css/Taskbar.css';

const Taskbar = (props) => {
    return (
        <TasksContext.Consumer>
            {(context) => (
                <div className="taskbar">
                    <div className="taskbar-title">
                        <p>{props.status}</p>
                    </div>
                    <div
                        className="taskbar-list"
                        onDragOver={props.onDragOver}
                        onDrop={props.onDrop}
                    >
                        {context.tasks.map((task) => {
                            if (task.status === props.status) {
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
            )}
        </TasksContext.Consumer>
    );
}

Taskbar.propTypes = {
    status: PropTypes.string.isRequired,
    onDragOver: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired
}

export default Taskbar;