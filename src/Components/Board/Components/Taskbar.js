import React from 'react';
import { TasksContext } from '../Contexts/TasksContext';
import Task from './Task';
import '../css/Taskbar.css';

class Taskbar extends React.Component {
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
            <TasksContext.Consumer>
                {(context) => (
                    <div className="taskbar">
                        <div className="taskbar-title">
                            <p>{this.props.status}</p>
                        </div>
                        <div
                            className="taskbar-list"
                            onDragOver={this.onDragOver}
                            onDrop={this.onDrop}
                        >
                            {context.tasks.map((task) => {
                                if (task.status === this.props.status) {
                                    return (
                                        <Task
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
}

export default Taskbar;